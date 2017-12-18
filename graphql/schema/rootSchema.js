const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');
const typeDefs = require('./typeDefinition');
const countrySearchResolvers = require('../resolvers/allCountries');

const rootResolvers = {
  Query: {},
};

const resolvers = merge(rootResolvers, countrySearchResolvers);
console.log('Result resolver', resolvers)

// Put together a schema
const rootSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = rootSchema;