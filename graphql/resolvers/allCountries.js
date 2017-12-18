const getCountries = require('../connectors/geoConnectors');

module.exports = {
  Query: {
    async allCountries() {
      return await getCountries();
    }
  }
};