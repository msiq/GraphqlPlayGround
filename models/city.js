const required = require('../helpers/required');

module.exports = class City {
  constructor(id = required('id'), name, countryCode, district, info) {

    this.id = id;
    this.name = name;
    this.countryCode = countryCode;
    this.district = district;
    this.info = info;
  }
}