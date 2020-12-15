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
    // expect(data).toContain('sara');
    expect(data).toBeDefined;
  });

  // POST to /signin to login as a user (use basic auth)
  // it('should respond with a new user on /POST to /signin', async () => {
  //   const data = await mockRequest.post('/signin').query(newUser);
  //   // expect(data).toContain('sara');
  //   expect(data).toBeDefined;
  // });

  // Does the middleware function (send it a basic header)
  // Do the routes assert the requirements (signup/signin)

});

  // Need tests for auth middleware and the routes

// const middleware = require('../src/auth/signin');

// describe('signin middleware', () => {
//   let consoleSpy;
//   let req = {};
//   let res = {};
//   let next = jest.fn(); // spy on the next method

//   beforeEach(() => {
//     // Attach to the console
//     consoleSpy = jest.spyOn(console, 'log').mockImplementation();
//   });

//   afterEach(() =>{
//     // put the console back
//     consoleSpy.mockRestore();
//   });

//   it('properly logs some output', () => {
//     middleware(req, res, next);
//     expect(consoleSpy).toHaveBeenCalled();
//   })
// })
