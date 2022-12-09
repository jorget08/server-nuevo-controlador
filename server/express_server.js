const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/', routes)

module.exports = app