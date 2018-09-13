const express = require('express');
const app = express();
const logger = require('./logger');
const db = require('./database');

app.use(logger);
app.get('/', function(req, res) {
    res.send(
        `<h1>Node Express</h1>
        <h2>Try one of api routes</h2>
        <ul>
          <li>/api/info get api info </li>
        </ul>`
    );
});
const router = express.Router();
router.get('/', async(req, res) => {
    try {
        const result = await db.query('SELECT * FROM country WHERE Capital < 20;')
        res.json(result);
    } catch (err) {
        console.log(err);
        res.json('somthing went wrong');
    }

});
app.use('/api', router);

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