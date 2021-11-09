import supertest from 'supertest';
import app from '../../../index';

describe('Route api/img/ size medium -> challenge 1', () => {
  it('get API /api/imgs/static/1 size', (done) => {
    supertest(app)
      .get('/api/imgs/static/1?size=medium')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 111988 }, done);
  });

  it('get API /api/imgs/static/2 size', (done) => {
    supertest(app)
      .get('/api/imgs/static/2?size=medium')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 109834 }, done);
  });

  it('get API /api/imgs/static/3 size', (done) => {
    supertest(app)
      .get('/api/imgs/static/3?size=medium')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 65414 }, done);
  });

  it('get API /api/imgs/static/4 size', (done) => {
    supertest(app)
      .get('/api/imgs/static/4?size=medium')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 168895 }, done);
  });

  it('get API /api/imgs/static/5 size', (done) => {
    supertest(app)
      .get('/api/imgs/static/5?size=medium')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 68430 }, done);
  });
});
