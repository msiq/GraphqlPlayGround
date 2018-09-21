const db = require('../db');

module.exports = {
  Query: {    
      City: (_, { id, args, context, info }) => {
          return db.getCity(id);
      },
      Country: (_, { code, args, context, info }) => {
          return db.getCountry(code)
      }
    },
    Mutation: {
        createCity: (_, { city }) => {
            return db.createCity(city);
        }
    },
    Country: {
      city: (Country, args, context, info) => {
          return args.capital ? Country.city.filter(city => city.id === Country.capital): Country.city;
      },
      info: (Country) => {
          return db.getCountryInfo(Country.code)
              .then(info => JSON.parse(info));
      }
    }
};