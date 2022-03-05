'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const Book = require('./models/book');
const verifyUser = require('./auth');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get('/test', (request, response) => {

  response.send('test request received');

});


// to use verification functionality, paste your existing code inside of this function:
// verifyUser(req, async (err, user) => {
//   if (err) {
//     console.error(err);
//     res.send('invalid token');
//   } else {
//     // insert try catch logic here.  BE CAREFUL.  check syntax IMMEDIATELY
//   }
// });


app.get('/books', async (request, response) => {

  verifyUser(request, async (err, user) => {
    if (err) {
      console.error(err);
      response.send('invalid token');
    } else {
      // insert try catch logic here.  BE CAREFUL.  check syntax IMMEDIATELY
      // then make edits.  use the user info!
      try {
        // console.log(request);
        const bookQuery = {};
        if (user.email) {
          bookQuery.email = user.email;
        }

        const books = await Book.find(bookQuery);
        // console.log(books);
        response.status(200).send(books);
      }
      catch (error) {
        console.log(error.message);
        response.status(500).send(error.message);
      }
    }
  });



});

// I have intentionally removed some of the other code since it was borrowed from code review!   thanks for sharing Micha and Lauren!!!



app.listen(PORT, () => console.log(`listening on ${PORT}`));
