const myMemes = require('../data/seed.js');

module.exports = {
  fetch: (req, res) =>{
    res.status(200).send(myMemes);
  },

  create: (req, res)=> {
    myMemes.push(JSON.parse(req.body[0]));
    res.status(201).send(myMemes);
  }
}