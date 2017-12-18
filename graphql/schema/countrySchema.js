require('apollo-cache-control');
const countrySchema = [`
  type Country @cacheControl(maxAge: 240) {
    name: String
    continentName: String,
    currencyCode: String,
    countryCode: String @cacheControl(maxAge: 30),
    population: String,
    continentCode: String,
    capital: String,
  }
`];

module.exports = countrySchema;