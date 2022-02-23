'use strict';

// required from npm
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');


// instantiate express server by calling express
const app = express();

// middleware - use cors
app.use(cors());

// define port and proof that env works
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.status(200).send('This totally works!')
})

app.get('/photos', async (req, res, next) => {
  try {
    let searchQuery = req.query.searchQuery
    let url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=${searchQuery}`;

    let results = await axios.get(url);

    let picArray = results.data.results.map(pic => new Photo(pic));
    // proof of life is good
    // console.log(picArray);
    res.send(picArray);
  } catch (error) {
    Promise.resolve().then(() => {
      throw new Error('Photos Currently Unavailable');
    }).catch(next)

    // maybe easiest to ahndle inline
    //res.status(404).send(error.message)
  }
})

app.get('*', (req, res) => {
  res.status(404).send('These are not the droids you are looking for...')
})

class Photo {
  constructor(pic) {
    this.src = pic.urls.regular;
    this.alt = pic.alt_description;
    this.arrtist = pic.user.name
  }
}

app.use((error, request, response, next) => {
  console.log(error.message)
  response.status(500).send(error.message)
});

// need to listen to keep server running
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
