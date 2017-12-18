const countrySchema = require('./countrySchema');

const typeDefs = [`
  schema {
    query: Query
  }
  type Query @cacheControl(maxAge: 240) {
    allCountries: [Country] @cacheControl(maxAge: 240)
  }
`];

const rootDefinition = [...typeDefs, ...countrySchema];

module.exports = rootDefinition;