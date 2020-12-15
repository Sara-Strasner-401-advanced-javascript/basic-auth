'use strict';

// 3rd Party Resources
const express = require('express');
const userRoutes = require('./routes/user')
const logger = require('./middleware/logger');
const cors = require('cors');

// Prepare the express app
const app = express();
app.use(cors());

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.use(logger);
app.use(userRoutes);

////////////////////

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
