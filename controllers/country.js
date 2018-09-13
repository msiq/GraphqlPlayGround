const db = require('../db/database');

module.exports = {
  getCountry: async (req, res) => {
      try {
        res.json(await db.getCountry(req.params.countryId));
      } catch (err) {
        res.json(err.message);
      }
    },
    getCities: async (req, res) => {
      try {
        res.json(await db.getCitiesByCountry(req.params.countryId));
      } catch (err) {
        res.json(err.message);
      }
    }
}