const express = require('express');

module.exports = express.Router()
  .get('/', function (req, res) {
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