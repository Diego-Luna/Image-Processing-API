import supertest from 'supertest';
import app from '../../index';

describe('Route api/img/ size small', () => {
  it('get API /api/imgs/1 size', (done) => {
    supertest(app)
      .get('/api/imgs/1?size=small')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 30051 }, done);
  });

  it('get API /api/imgs/2 size', (done) => {
    supertest(app)
      .get('/api/imgs/2?size=small')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 26562 }, done);
  });

  it('get API /api/imgs/3 size', (done) => {
    supertest(app)
      .get('/api/imgs/3?size=small')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 19369 }, done);
  });

  it('get API /api/imgs/4 size', (done) => {
    supertest(app)
      .get('/api/imgs/4?size=small')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 52921 }, done);
  });

  it('get API /api/imgs/5 size', (done) => {
    supertest(app)
      .get('/api/imgs/5?size=small')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 18426 }, done);
  });
});
