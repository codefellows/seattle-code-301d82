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



//////////////////////////////Demo Fun//////////////////////////
let longTask = (status) => new Promise( (resolve,reject) => {
  let timer = Math.floor(Math.random() * 3000);
  setTimeout( () => {
    if( status ) { resolve(`Good (${status} / ${timer})`); }
    else { reject('Bad'); }
  },timer);
});


// first useage, not that exciting.  no comparators
longTask('First One')
  .then(task => console.log('Task', task))
  .catch(console.error);

// console.log('------- Individually ----------');
longTask('i - 1').then(task => console.log('Task', task)).catch(console.error);
longTask('i - 2').then(task => console.log('Task', task)).catch(console.error);
longTask('i - 3').then(task => console.log('Task', task)).catch(console.error);
longTask('i - 4').then(task => console.log('Task', task)).catch(console.error);

// console.log('------- Chained ----------');
longTask('c - 1')
  .then( data => { console.log(data); return longTask('c - 2'); } )
  .then( data => { console.log(data); return longTask('c - 3'); } )
  .then( data => { console.log(data); return longTask('c - 4'); } )
  .then( data => console.log(data));


  // Running Many Async Things Simultaneously ... they may not all finish in order, but the collected responses will be GIVEN to you in order
console.log('------- Promise.all() ----------');
let stuffToDo = [];
for( let i = 1; i <= 10; i++ ) {
  stuffToDo.push(longTask(`pa - ${i}`));
}
Promise.all(stuffToDo)
  .then(things => console.log('Promise.all() Response Array', things))
  .catch(console.error);


// need to listen to keep server running
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
