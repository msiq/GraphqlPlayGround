const db = require('../db');

module.exports = {
  Query: {    
      City: (pre, { id }) => db.getCity(id),
      Country: (pre, { code }) => db.getCountry(code)
  },
  Country: {
      city: (Country) => db.getCitiesByCountry(Country.code),
      info: (Country) => {
          return db.getCountryInfo(Country.code)
              .then(info => JSON.parse(info));
          
      }
      
  }
};