# Warm-Up Exercise

Read through this code as if you are the interpreter. Find all of the mistakes in this code and write down the correct syntax for each mistake.

## server.js

```js
'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/username', (req, res) => {
  const userInfo = {
    name: req.query.username,
    password: req.query.password
  };


  res.status(200).send(userInfo);
})

// if error handling, 
app.use((error, req, res, next) => {
  //handle some errors
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
```
