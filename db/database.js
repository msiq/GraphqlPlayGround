const mysql = require('mysql');
const City = require('../models/city');
const Country = require('../models/country');
const required = require('../helpers/required');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'world_x'
});
connection.connect();

class Database {
  constructor() {
    //do something
  }
  query(query) {
    return (new Promise((resolve, reject) => {
        connection.query(
          query,
          (err, rows, fields) => {
            if (err) reject(err);
            resolve(rows);
          });
      }))
      .then((rows) => {
        return new Promise((resolve, reject) => {
          // connection.end(err => {
          //   if (err) reject(err);
          resolve(rows);
          // })
        })
      })
      .catch((err) => {
        return new Promise((resolve, reject) => reject(err));
      });
  }
  getCity(id = required('id')) {
    return this.query(`SELECT * FROM city WHERE ID = ${id};`)
      .then((rows) => {
        if (rows.length === 0) {
          throw new Error('Empty result');
        }
        return new City(rows[0].ID, rows[0].Name, rows[0].CountryCode, rows[0].District, rows[0].Info);

      })
      .catch((err) => {
        throw new Error(`No City found with id ${id}`);
      })

  }
  getCountry(id = required('code')) {
    return this.query(`SELECT * FROM country WHERE Code = '${id}';`)
      .then((rows) => {
        if (rows.length === 0) {
          throw new Error('Empty result');
        }
        return new Country(rows[0].Code, rows[0].Name, rows[0].Capital, rows[0].code2);

      })
      .catch((err) => {
        throw new Error(`No Country found with code ${id}`);
      })

  }
}

module.exports = new Database();