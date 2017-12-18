
const rp = require('request-promise');
const { get } = require('lodash');

const username = 'dantiff';

module.exports = function getCountries() {
  const url = `http://geonames.org/countryInfoJSON?&style=full`;
  var options = {
    uri: url,
    json: true // Automatically parses the JSON string in the response
  };
  return rp(options).then((data) => {
    const geoNames = get(data, 'geonames');
    const returner = geoNames.map(({ capital, continent, population, continentName, countryName, currencyCode, countryCode }) => {
      return {
        continentName,
        name: countryName,
        currencyCode,
        countryCode,
        population,
        continentCode: continent,
        capital,
      };
    });
    return returner;
  }).catch((error) => {
    console.log('The error', error)
    throw new Error(error.reason);
  });
}