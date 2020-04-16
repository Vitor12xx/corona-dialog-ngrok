const express = require('express');
const { dialogflow } = require('actions-on-google');
const df = dialogflow();
require('./intents')(df);

const routes = express.Router();

routes.post('/', df);

module.exports = routes;