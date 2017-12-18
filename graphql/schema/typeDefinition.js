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

console.log(rootDefinition, countrySchema);

module.exports = rootDefinition;