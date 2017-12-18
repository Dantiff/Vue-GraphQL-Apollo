const getCountries = require('../connectors/geoConnectors');

module.exports = {
  Query: {
    async allCountries() {
      await getCountries();
    }
  }
};