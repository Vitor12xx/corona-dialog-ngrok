const express = require('express');
const routes = require('./routes');

const app = express();

let port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', routes);

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
})

module.exports = app
