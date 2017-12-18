const countrySchema = require('./countrySchema');

const typeDefs = [`
  schema {
    query: Query
  }
  type Query {
    allCountries: [Country]
  }
`];

const rootDefinition = [...typeDefs, ...countrySchema];

module.exports = rootDefinition;