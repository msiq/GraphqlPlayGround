const db = require('../db/database');

module.exports = {
  getCity: async (req, res) => {
    try {
      res.json(await db.getCity(req.params.cityId));
    } catch (err) {
      res.json(err.message);
    }
  }
}