const express = require('express');
const app = express();
const logger = require('./helpers/logger');

app.use(logger);

app.get('/', function (req, res) {
    res.send(
        `<h1>Node Express</h1>
        <h2>Try one of api routes</h2>
        <ul>
          <li>/api/city/{id} get city info </li>
          <li>/api/country/{code} get country info </li>
        </ul>`
    );
});

app.use('/api', require('./controllers'));

app.use((req, res, next) => {
    res.send('<h1>404<h1>');
});

const server = app.listen('7777');

console.log(
    'Node Express in up at http://%s:%s',
    server.address().address
    .split(':')
    .map((addressPart, ind, address) => {
        if (ind == 0) {
            return !addressPart && 127;
        }
        if (ind == 1) {
            return !addressPart && 0;
        }
        if (ind == 2) {
            if (!addressPart && address.length === 3) {
                return '0:1';
            }
            return !addressPart && 0;
        }
        if (ind == 3) {
            return !ippart && 1;
        }
    })
    .join(':'),
    server.address().port
);