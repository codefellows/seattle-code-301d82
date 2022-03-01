'use strict';

// requirements for server
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// bring in mongoose
const mongoose = require('mongoose');

// must bring in a schema IF we want to interact with that model
const Cat = require('./models/cat.js');
const { response } = require('express');

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

// MUST have to recieve json from a request
app.use(express.json());

// define PORT validate env working
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.status(200).send('Greetings form the server!');
});

app.get('/cats', getCats);
app.post('/cats', postCats);
// must have a path paramater, it will be the (unkown) id,
// we will use a variable to capture that id
// to create that variable we add ':<variable-name> in place of the path parameter

app.delete('/cats/:id', deleteCats);


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

async function postCats (req, res, next) {
  console.log(req.body);
  try {

    let createdCat = await Cat.create(req.body);
    res.status(200).send(createdCat);
  } catch (error){
    next(error);
  }
}

async function deleteCats (req, res, next){
  // access path parameter variable as an object property
  let id = req.params.id;
  // proof of life is good
  // console.log(id);
  try {
    await Cat.findByIdAndDelete(id);


    res.send('cat deleted');
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
