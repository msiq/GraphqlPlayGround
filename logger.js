// import winston from 'winston';
// import expressWinston from 'express-winston';
const winston = require('winston');
const expressWinston = require('express-winston');

module.exports = expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: false,
      level: 'info',
      colorize: true,
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf(info => {
          return `${info.timestamp} ${info.level}: ${info.meta.req.httpVersion} ${info.message} ${info.meta.res.statusCode} ${info.meta.req.headers.host}`;
        })
      ),
    })
  ]
})