// app.js file

// var cors = require('cors');
var jsonServer = require('json-server');
var cors = require("cors");

// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(cors());
// server.use(jsonServer.defaults());

// Add custom routes
// server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })

// Returns an Express router
var router = jsonServer.router('data.json');

server.use(router);

console.log("starting");
server.listen(3000);