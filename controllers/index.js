const express = require('express');

const city = require('./city');
const country = require('./country');

module.exports = express.Router()
  .get('/city/:cityId', city.getCity)
  .get('/country/:countryId', country.getCountry)
  .get('/country/:countryId/cities', country.getCities)
  .get('/country/:countryId/info', country.getInfo)
  .get('*', function (req, res) {
    res.send(
        `<h1>Node Express</h1>
        <h2>Try one of api routes</h2>
        <ul>
          <li>/api/city/{id} get city info </li>
          <li>/api/country/{code} get country info </li>
          <li>/api/country/{code}/info get more country info </li>
          <li>/api/country/{code}/cities get country cities </li>
          <li>
          /gql graphql
          </li>
        </ul>`
    );
});