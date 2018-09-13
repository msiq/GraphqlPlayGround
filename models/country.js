const required = require('../helpers/required');

module.exports = class Country {
  constructor(code = required('code'), name, catipal, code2) {

    this.code = code;
    this.name = name;
    this.catipal = catipal;
    this.code2 = code2;
  }
}