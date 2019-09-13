const request = require('supertest');
const db = require('../data/dbConfig.js');

const server = require('./server.js');

describe('the server', () => {

  beforeEach(async () => {
    // wipe the database
    await db('hobbits').truncate();
  })

  describe('GET /', () => {
    it('should run the testing env', () => {
      expect(process.env.DB_ENV).toBe('testing');
    })
    
    it('should return status 200', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        });
    })

    it('should return the correct object', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.type).toBe('application/json');
          expect(res.body).toEqual({ api: 'up' });
        })
    })
  });

  describe('GET /hobbits', () => {
    it('should return list of hobbits', () => {
      return request(server)
      .get('/hobbits')
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(res.body.length).toBe(0);
      });
    })
  });
});