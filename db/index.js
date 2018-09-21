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
  query(query) {
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        (err, rows, fields) => {
          if (err) reject(err);
          resolve(rows);
        });
    })
  }
  getCity(id = required('id')) {
    return this.query(`SELECT * FROM city WHERE ID = ${id};`)
      .then((rows) => {
        if (rows.length === 0) {
          throw new Error('Empty result');
        }

        return new City(rows[0].ID, rows[0].Name, rows[0].CountryCode, rows[0].District, JSON.parse(rows[0].Info));
      })
      .catch((err) => {
        throw new Error(`No City found with id ${id}`);
      })

  }
  createCity(city) {
    return this.query(
      `INSERT INTO city (Name, CountryCode, District, Info) VALUES ("${city.name}", "${city.countryCode}", "${city.district}", '${city.info && JSON.stringify(city.info)}');`
    )
      .then(result => {
        return this.query(`SELECT * FROM city WHERE ID = ${result.insertId};`)
        .then((rows) => {
          if (rows.length === 0) {
            throw new Error('Empty result');
          }
          return new City(rows[0].ID, rows[0].Name, rows[0].CountryCode, rows[0].District, JSON.parse(rows[0].Info));
        })
        .catch((err) => {
          throw new Error(`No City found with id ${id}`);
        })
      }).catch((err) => {
        throw err;//Error(`No City created with id ${id}`);
      });
  }
  getCountry(code = required('code')) {
    return this.query(`SELECT * FROM country LEFT JOIN city ON city.CountryCode = country.Code WHERE Code = '${code}' ;`)
      .then((rows) => {
        if (rows.length === 0) {
          throw new Error('Empty result');
        }

        let cities = [];
        rows.map(row => {
          cities.push(
            new City(row.ID, row.Name, row.CountryCode, row.District, JSON.parse(row.Info))
          );
        })

        return new Country(rows[0].Code, rows[0].Name, rows[0].Capital, rows[0].Code2, cities);
      })
      .catch((err) => {
        throw err;//new Error(`No Country found with code ${code}`);
      })

  }
  getCountryInfo(code) {
    return this.query(`SELECT * FROM countryinfo WHERE _id = '${code}';`)
      .then((rows) => {
        if (rows.length === 0) {
          throw new Error('Empty result');
        }

        return rows[0].doc;
      })
      .catch((err) => {
        throw new Error(`No info found Country with code ${code}`);
      })
  }
  getCitiesByCountry(code) {
    return this.query(`SELECT * FROM city WHERE CountryCode = '${code}';`)
      .then((rows) => {
        if (rows.length === 0) {
          throw new Error('Empty result');
        }

        return rows.map((city) => new City(city.ID, city.Name, city.CountryCode, city.District, JSON.parse(city.Info)));
      })
      .catch((err) => {
        throw new Error(`No Country found with code ${code}`);
      })
  }
}

module.exports = new Database();