const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');
const typeDefs = require('./typeDefinition');
const countrySearchResolvers = require('../resolvers/allCountries');

const rootResolvers = {
  Query: {},
};

// Put together the resolvers
const resolvers = merge(rootResolvers, countrySearchResolvers);

// Put together a schema
const rootSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = rootSchema;