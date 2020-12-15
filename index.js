'use strict';

const mongoose = require('mongoose');

const server = require('./src/server');

// mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     app.listen(3000, () => console.log('server up'));
//   })
//   .catch(e => console.error('Could not start server', e.message));

server.start(3000);

mongoose.connect('mongodb://localhost:27017/auth', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('I am connected to the db');
});

