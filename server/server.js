require('babel-core/register');
require('babel-polyfill');

var falcor = require('falcor');
var falcorExpress = require('falcor-express');
var falcorRouter = require('falcor-router');
var { CharManagerAppRoutes } = require('./routes');
var http = require('http');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const app = express();
app.server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use('/model.json', falcorExpress.dataSourceRoute((req, res) => {
  return new falcorRouter(CharManagerAppRoutes);
}));
app.use(express.static('client/public'));

const port = process.env.PORT || 5000;
app.server.listen(port);
