'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Cat = require('./models/cat.js');

async function seed(){

  //structure is the SAME as our schema
  // name: {type: String, required: true},
  // color: {type: String, required: true},
  // hasClaws: {type: Boolean, required: true},
  // create my first Cat
  await Cat.create({
    name: 'Scamper',
    color: 'gray-tiger',
    hasClaws: true,
    location: 'Moses Lake'
  });
  console.log('Scamper has been added');

  await Cat.create({
    name: 'Tango',
    color: 'brown and black tabby',
    hasClaws: true,
    location: 'Bremerton'
  });
  console.log('Tango has been added');

  mongoose.disconnect();
}

seed();
