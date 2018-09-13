const express = require('express');

const city = require('./city');
const country = require('./country');

module.exports = express.Router()
  .get('/city/:cityId', city.getCity)
  .get('/country/:countryId', country.getCountry)
  .get('/country/:countryId/cities', country.getCities);