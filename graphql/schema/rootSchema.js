const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');
const rootDefs = require('./typeDefinition');
const countrySearchResolvers = require('../resolvers/allCountries');

const logger = {
  log(e) {
    return console.log(e);
  }
};

const rootResolvers = {
  Query: {},
};

const resolvers = merge(rootResolvers);

const rootSchema = makeExecutableSchema({
  typeDefs: rootDefs,
  resolvers,
});

module.exports = rootSchema;