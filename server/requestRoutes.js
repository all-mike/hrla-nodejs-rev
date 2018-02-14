const fs = require('fs');
const requests = require('./requests');
const myMemes = require('../data/seed.js');

//NOTE1: Please students, never use a nodejs page to store data, not even as a temporary database
// Get MYSQL and MONGODB servers installed on your computers and set them up, it's not hard; which brings me to my next point:

//MORE IMPORTANT NOTE2!!!:
// Please have MONGODB and MONGOD command prompt shell installed before your saturday full-stack review!!

module.exports = {

  static: {
    // TODO create GET method to serve static files
  },

  mymemes: {
    // TODO create GET method to fetch all memes

    // TODO create POST method to post a new meme
  },
};
