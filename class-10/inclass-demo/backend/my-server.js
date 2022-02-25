'use strict';

// required from npm
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// import modules
const getPhotos = require('./photos.js');


// instantiate express server by calling express
const app = express();

// middleware - use cors
app.use(cors());

// define port and proof that env works
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.status(200).send('This totally works!')
})

app.get('/photos', getPhotos);



app.get('*', (req, res) => {
  res.status(404).send('These are not the droids you are looking for...')
})



app.use((error, request, response, next) => {
  console.log(error.message)
  response.status(500).send(error.message)
});

// need to listen to keep server running
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
