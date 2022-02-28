'use strict';

// requirements for server
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// bring in mongoose
const mongoose = require('mongoose');

// must bring in a schema IF we want to interact with that model
const Cat = require('./models/cat.js');

//connect Mongoose to our MongoDB
mongoose.connect(process.env.DB_URL);

// add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

// implement express
const app = express();

// middleware
app.use(cors());

// define PORT validate env working
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.status(200).send('Greetings form the server!');
});

app.get('/cats', getCats);

async function getCats(req, res, next) {
  try {
    // maybe for your lab???  why???
    // let results = await Cat.find({email: req.query.email});
    let queryObject = {};
    if(req.query.location) {
      queryObject.location = req.query.location;
    }

    let results = await Cat.find(queryObject);
    res.status(200).send(results);
  } catch(error){
    next(error);
  }
}

app.get('*', (req, res) => {
  res.status(404).send('Not sure what you\'re looking for, but this isn\'t it');
});

app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
