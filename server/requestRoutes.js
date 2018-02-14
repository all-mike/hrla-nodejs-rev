const fs = require('fs');
const requests = require('./requests.js');
const myMemes = require('../data/seed.js');

module.exports = {

  static: {
    GET: (req, res) => {
      let path = req.url
      if (path === '/'){
        path = '/index.html'
      };
      // console.log(`${__dirname}/../client${path}`)
      fs.readFile(`${__dirname}/../client/static${path}`, 'utf8', (err, data) => {
        if (err) {
          throw err;
        } else {
          res.end(data);
        }
      })
    }
  },

  mymemes: {
    GET: (req, res) => {
      requests.sendResponse(res, myMemes);
    },

    POST: (req, res) => {
      requests.parseData(req, (data) => {
        myMemes.push(data);
        requests.sendResponse(res, myMemes, 201);
      })
    }
  },

}