'use strict';

const axios = require('axios');

async function getPhotos(req, res, next) {
  try {
    let searchQuery = req.query.searchQuery;

    // another way to build an axios call, as per docs
    //-------------------------------------------------
    // let params = {
    //   client_id: process.env.UNSPLASH_API_KEY,
    //   query: searchQuery
    // }
    // let url = `https://api.unsplash.com/search/photos`;

    // let results = await axios.get(url, { params });
    //--------------------------------------------------



    let url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=${searchQuery}`;

    let results = await axios.get(url);

    let picArray = results.data.results.map(pic => new Photo(pic));
    // proof of life is good
    // console.log(picArray);
    res.send(picArray);
  } catch (error) {
    Promise.resolve().then(() => {
      throw new Error(error.message);
    }).catch(next)

    // maybe easiest to ahndle inline
    //res.status(404).send(error.message)
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
