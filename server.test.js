const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
  it('should return status 200 and success message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toHaveProperty('message'); // or exact match
  });
});