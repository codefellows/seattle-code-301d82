'use strict';

// bring in mongoose for us to use
const mongoose = require('mongoose');

// extract the Schema property form the mongoose object
const { Schema } = mongoose;

// create a cat schema, deifnce how our object will be structured
const catSchema = new Schema ({
  name: {type: String, required: true},
  color: {type: String, required: true},
  hasClaws: {type: Boolean, required: true},
  location: {type: String, required: true}
});

// define our model(give it mongoose functionality and a predefined schema to shape our data)
const CatModel = mongoose.model('cats', catSchema);

// export the model so we can use it!
module.exports = CatModel;


