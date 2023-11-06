const express = require('express');

const app = express();

//Rotas
const index = require('./routes/index');
const addressRoute = require('./routes/addressRoute');
const weatherRoute = require('./routes/weatherRoute');

app.use('/', index);
app.use('/address', addressRoute);
app.use('/weather', weatherRoute);

module.exports = app;
