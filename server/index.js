const express = require('express');
// const parser = require('body-parser');
// const logger = require('morgan');
const path = require('path');
const routes = require('./requestRoutes.js');

// const http = require('http');
// const url = require('url');
// const routes = require('./requestRoutes.js');
// const request = require('./requests.js')

const port = 9001;

const app = express();

// app.use(parser.json());
// app.use(parser.urlencoded({extended: true}));
// app.use(logger('dev'));

app.use(express.static(path.join(__dirname, '../client/static')))

const customParser = function(req, res, next){
  let data = '';
  req.on('data', function(chunk){
    data += chunk;
  })
  req.on('end', function() {
    let allData = data.split('=');
    console.log('Retrieved the following data: ', allData);
    console.log('the req.body is, ', req.body)
    req.body = allData;
    next();
  })
}

app.use(customParser);

const customLogger = function(req, res, next){
  console.log(
    'Servering request type: ',
    req.method,
    ' for URL: ',
    req.url
  )
  next();
}

app.use(customLogger);

app.use('/api', routes);

app.listen(port, () => {
  console.log('Hey1 Listening! port: ', port);
})