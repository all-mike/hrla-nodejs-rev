const fs = require('fs');
const requests = require('./requests');
const myMemes = require('../data/data');

module.exports = {

  static: {
    GET: (req, res) => {
      const path = req.url === '/' ? '/index.html' : req.url;
      fs.readFile(`${__dirname}/../client/static${path}`, 'utf8', (err, content) => {
        if (err) {
          throw err;
        } else {
          res.end(content);
        }
      });
    },
  },

  mymemes: {
    GET: (req, res) => {
      requests.sendResponse(res, myMemes);
    },

    POST: (req, res) => {
      requests.parseData(req, (data) => {
        myMemes.push(data);
        requests.sendResponse(res, myMemes, 201);
      });
    },

    OPTIONS: (req, res) => {
      requests.sendResponse(res, null);
    },
  },
};
