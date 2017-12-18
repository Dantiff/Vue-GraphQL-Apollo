const getCountries = require('../connectors/geoConnectors');

module.exports = {
  Query: {
    allCountries: async () => {
      return await getCountries();
    }
  }
};