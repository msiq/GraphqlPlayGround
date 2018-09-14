const db = require('../db');

module.exports = {
  getCity: async (req, res) => {
    res.json(
      await db.getCity(req.params.cityId)
      .catch(err => err.message)
    );
  }
}