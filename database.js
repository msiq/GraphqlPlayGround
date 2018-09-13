const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'world_x'
});
connection.connect();

module.exports = {
  query: function (query, things) {
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        (err, rows, fields) => {
          if (err) reject(err);
          resolve(rows, fields);
        });
    });
  }
}