'use strict';

console.log('Hello World, form our FIRST server!');
// typically all requires would be at the top, I have them dissected to show what is being added, why we need them, and how they are used

// in our servers, we MUST use require instead of import
// to create server, bring in Express.  as per docs
const express = require('express');


// once we have express, we must USE express
const app = express();

// bring in dotenv if we are going to use a .env
// as per docs
require('dotenv').config();
const PORT = process.env.PORT || 3002;

// we must include CORS if we want to share resources over the web
const cors = require('cors');
app.use(cors());

// above is a basic server --------------------------------
let data = require('./data/pets.json');



// creating basic default route:  hit at http://localhost:3001/
app.get('/', (request, response) => {
  response.send('Hello, form our server!');
})

// creating a banana route:  hit at http://localhost:3001/banana
app.get('/banana', (request, response) => {
  response.send('mmmmmmm bananas');
})

app.get('/sayHello', (request, response) => {
  console.log(request.query)
  let firstName = request.query.firstName;
  let lastName = request.query.lastName;

  response.send(`Hello ${firstName} ${lastName}`);
})

app.get('/pet', (request, response) => {
  try {
    let species = request.query.species;
    // see results in TERMINAL
    // console.log(species);
  
    let petObject = da.find(pet => pet.species === species);
    let selectedPet = new Pet(petObject);
    // proof of life, see in TERMINAL
    // console.log(selectedPet);
  
    response.send(selectedPet);
  } catch (error){
    // if I have an error, I am going to instatiate a new Error instance (error object)
    // just do this!
    // throw new Error


    // not usually a thing but could.  either throw OR the inline code below.  note express prefers throw and let middleware handle error
    response.status(500).send('something went wrong');
  }
})

// creates a catch all route, essentially a "not found".
// this appears LASt and is hit at http://localhost:3001/<anything that odesn't exist>
app.get('*', (request, response) => {
  response.send('Not sure what you\'re looking for, but taht route doesn\'t exist');
})

app.use( (error, request, response, next) => {
  response.status(500).send(error.message)
})

class Pet {
  constructor(petObject){
    this.name = petObject.name;
    this.breed = petObject.breed
  }
}


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
