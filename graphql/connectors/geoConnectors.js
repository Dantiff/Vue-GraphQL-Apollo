
const rp = ('request-promise');
const { get } = ('lodash');

const username = 'dantiff';

module.exports = function getCountries() {
  const url = `http://api.geonames.org/countryInfoJSON?username=${username}&style=full`;
  var options = {
    uri: url,
    json: true // Automatically parses the JSON string in the response
  };
  return rp(options).then((data) => {
    const geoNames = get(data, 'geonames');
    return geoNames.map(({ capital, continent, population, continentName, countryName, currencyCode, countryCode }) => {
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
  }).catch((error) => {
    throw new Error(error.reason);
  });
}