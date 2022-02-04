'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const getJobs = require('./components/jobs');
const notFound = require('./components/notFound');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/jobs', getJobs);
app.use('*', notFound);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
