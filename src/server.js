'use strict';
const express = require('express');
const logger = require('./middleware/logger');
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');
const validator = require('./middleware/validator');
const app = express();

app.use(logger);

app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

app.get('/person', validator, (req, res) => {
  res.json(req.query);
});

app.use('*', error404);
app.use(error500);

function start(port) {
  app.listen(port, () => {
    console.log(`i'm listening on port${port}`);
  });
}
module.exports = {
  app: app,
  start: start,
};
