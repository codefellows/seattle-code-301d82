'use strict';

const axios = require('axios');

let cache = {};

async function getPhotos(req, res, next) {
  try {
    let searchQuery = req.query.searchQuery;

    // create custom key for each route and search result
    let key = searchQuery + 'photos';

    // if the cache exists, AND is valid...  send THAT data
    if(cache[key] && (Date.now() - cache[key].timestamp < 1000 * 20)){
      console.log('Cache Hit, images present, HURRAY!');
      res.status(200).send(cache[key].data)
    } else {
      console.log('Cache Miss, photos NOT present, Let\'s cache them!');

      let url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=${searchQuery}`;
  
      let results = await axios.get(url);
      let picArray = results.data.results.map(pic => new Photo(pic));
      cache[key] = {
        data: picArray,
        timestamp: Date.now()
      }
      res.send(picArray);
    }

  } catch (error) {
    // next hands passes the error to express, specifically the express middleware
   next(error)
  }
}


// for what its worth, you'll likelty see something with a .then()
function getPhotosUsingChaining(req, res) {
  let searchQuery = req.query.searchQuery;

  let params = {
    client_id: process.env.UNSPLASH_API_KEY,
    query: searchQuery
  }
  let url = `https://api.unsplash.com/search/photos`;

  axios.get(url, { params })
    .then(photoResults => photoResults.data.results.map(pic => new Photo(pic)))
    .then(groomedPhotos => res.status(200).send(groomedPhotos))
    .catch(err => console.error(err));

}

class Photo {
  constructor(pic) {
    this.src = pic.urls.regular;
    this.alt = pic.alt_description;
    this.arrtist = pic.user.name
  }
}

module.exports = getPhotos;
