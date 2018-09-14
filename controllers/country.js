const db = require('../db');

module.exports = {
  getCountry: async (req, res) => {
      res.json(
        await db.getCountry(req.params.countryId)
        .catch(err => err.message)
      )
    },
    getCities: async (req, res) => {
        res.json(
          await db.getCitiesByCountry(req.params.countryId)
          .catch((err) => err.message)
        );
      },
      getInfo: async (req, res) => {
        res.json(
          await db.getCountryInfo(req.params.countryId)
          .catch((err) => err.message)
        )
      }
}