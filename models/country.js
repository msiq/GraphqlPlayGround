const required = require('../helpers/required');
const db = require('../db');

module.exports = class Country {
  constructor(code = required('code'), name, catipal, code2) {

    this.code = code;
    this.name = name;
    this.catipal = catipal;
    this.code2 = code2;
    this.info = null;
  }

  async getInfo() {
    return await db.getCountryInfo(this.code)
      .catch((err) => err.message);
  }

  async getCities() {
    return await db.getCitiesByCountry(this.code)
      .catch((err) => err.message);
  }
}