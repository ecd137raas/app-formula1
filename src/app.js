const express = require('express')
const route = require('../src/route/f1route')
const path = require('path');

const app = express()

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static(path.join(__dirname, '../src/public')));

app.use(express.json());
app.use(route);

module.exports = app;