'use strict';
const base64 = require('base-64');
const Users = require('../models/userModel');
const bcrypt = require('bcrypt')

async function authentication(req, res, next) {
  // if (!req.headers.authorization) {
  //   { next('Invalid Login'); return; }
  // }
  let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
  let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
  let decodedString = base64.decode(encodedString); // "username:password"
  let [username, password] = decodedString.split(':'); // username, password
  console.log(username, password);
  try {
    const user = await Users.findOne({ username });
    console.log(user);
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      res.status(200).json(user);
    }
    else {
      throw new Error('Invalid User')
    }
  } catch (error) { res.status(403).send("Invalid Login"); }

  next();
}

module.exports = authentication;

