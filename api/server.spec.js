const request = require('supertest');
const server = require('./server.js');
require('events').EventEmitter.defaultMaxListeners = 0;

describe('Server check', () => {
    it('responds with 200', async () => {
        const response = await request(server).get('/');
        expect(response.status).toBe(200);
    })
})