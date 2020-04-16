const express = require('express');
const {WebhookClient, Card, Suggestion} = require('dialogflow-fulfillment');
const intents = require('./intents');

const routes = express.Router();

routes.post('/', (request, response) => {
    const agent = new WebhookClient({request, response});
  	let intentMap = new Map();
	for (var [key, value] of Object.entries(intents)) {
		intentMap.set(key, value);
	}
	agent.handleRequest(intentMap);
});

module.exports = routes;