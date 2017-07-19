const http = require('http');
const routes = require('./requestRoutes');
const request = require('./requests');

const port = 3000;

const ip = '127.0.0.1';

const router = {
  '/': routes.static,
  '/bundle.js': routes.static,
  '/api/mymemes': routes.mymemes,
};

const server = http.createServer((req, res) => {
  console.log(`serving request type ${req.method} for url ${req.url}`);

  const route = router[req.url];

  route ? route[req.method](req, res) : request.sendResponse(res, '', 404);
});

console.log(`listening on port ${port}`);

server.listen(port, ip);
