'use strict'

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const Users = require('../models/userModel');
const express = require('express');
const router = express.Router();
const basicAuth = require('../auth/signin');

// Process JSON input and put the data on req.body
router.use(express.json());

// Process FORM intput and put the data on req.body
router.use(express.urlencoded({ extended: true }));

// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup usernmae=john password=foo

router.post('/signup', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = new Users(req.body);
    const record = await user.save(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
});


// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
router.post('/signin', basicAuth, (req, res) => {
  res.status(200).send(req.user);
});

module.exports = router; 
