import supertest from 'supertest';
import app from '../../index';

describe('Route api/img/ size medium', () => {
  it('get API /api/imgs/1 size', (done) => {
    supertest(app)
      .get('/api/imgs/1?size=medium')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 110907 }, done);
  });

  it('get API /api/imgs/2 size', (done) => {
    supertest(app)
      .get('/api/imgs/2?size=medium')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 108519 }, done);
  });

  it('get API /api/imgs/3 size', (done) => {
    supertest(app)
      .get('/api/imgs/3?size=medium')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 64767 }, done);
  });

  it('get API /api/imgs/4 size', (done) => {
    supertest(app)
      .get('/api/imgs/4?size=medium')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 167287 }, done);
  });

  it('get API /api/imgs/5 size', (done) => {
    supertest(app)
      .get('/api/imgs/5?size=medium')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 67861 }, done);
  });
});
