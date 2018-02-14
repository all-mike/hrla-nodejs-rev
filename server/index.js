const http = require('http');
const url = require('url');
const routes = require('./requestRoutes.js');
const request = require('./requests.js')

const port = 9001;

const ip = '127.0.0.1';

const router ={
  '/': routes.static,
  '/bundle.js': routes.static,
  '/api/mymemes': routes.mymemes,
};

const server = http.createServer((req, res) => {

  console.log('serving request type: ', req.method, ' for url: ', req.url);

  const route = router[url.parse(req.url).pathname]

  console.log(route);

  if (route){
    route[req.method](req,res)
  } else {
    request.sendResponse(res, '', 404);
  }
})

console.log('Hey! Listening! port: ', port)

server.listen(port, ip)