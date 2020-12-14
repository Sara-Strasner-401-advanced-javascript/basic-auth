  'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

require('@code-fellows/supergoose');

describe('basic auth', () => {

  // POST to /signup to create a new user
  it('should respond with a new user on /POST to /signup', async () => {
    const newUser = {"username": "sara", "password": "test"};
    const data = await mockRequest.post('/signup').query(newUser);
    expect(data).toContain('sara');
  });

  // POST to /signin to login as a user (use basic auth)
  // Need tests for auth middleware and the routes
  // Does the middleware function (send it a basic header)
  // Do the routes assert the requirements (signup/signin)

});