import supertest from 'supertest';
import app from '../index';

describe('Tests for image processing api, challenge 1', () => {
  it('get API /api/imgs status and json', (done) => {
    supertest(app)
      .get('/api/imgs')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '821')
      .expect(200, done);
  });
});
