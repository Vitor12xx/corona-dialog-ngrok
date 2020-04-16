const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

let port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', routes);

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
})

module.exports = app
