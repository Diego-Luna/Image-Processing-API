import supertest from 'supertest';
import app from '../../../index';

describe('Route api/img/ size small -> challenge 1', () => {
  it('get API /api/imgs/static/1 size', (done) => {
    supertest(app)
      .get('/api/imgs/static/1?size=small')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 30071 }, done);
  });

  it('get API /api/imgs/static/2 size', (done) => {
    supertest(app)
      .get('/api/imgs/static/2?size=small')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 26607 }, done);
  });

  it('get API /api/imgs/static/3 size', (done) => {
    supertest(app)
      .get('/api/imgs/static/3?size=small')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 19405 }, done);
  });

  it('get API /api/imgs/static/4 size', (done) => {
    supertest(app)
      .get('/api/imgs/static/4?size=small')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 52995 }, done);
  });

  it('get API /api/imgs/static/5 size', (done) => {
    supertest(app)
      .get('/api/imgs/static/5?size=small')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 18478 }, done);
  });
});
