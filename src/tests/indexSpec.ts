import supertest from 'supertest';
import app from '../index';

describe('Tests for image processing api, challenge 1', () => {
  it('get API /api/imgs/static status and json', (done) => {
    supertest(app)
      .get('/api/imgs/static')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '961')
      .expect(200, done);
  });
});
