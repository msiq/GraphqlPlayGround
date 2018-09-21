const required = require('../helpers/required');
const db = require('../db');

module.exports = class Country {
  constructor(code = required('code'), name, capital, code2, city) {

    this.code = code;
    this.name = name;
    this.capital = capital;
    this.code2 = code2;
    this.info = null;
    this.city = city;
  }

  async getInfo(code) {
    return await db.getCountryInfo(code)
      .catch((err) => err.message);
  }

  async getCities() {
    return await db.getCitiesByCountry(this.code)
      .catch((err) => err.message);
  }
}