import supertest from 'supertest';
import app from '../../index';

describe('Route api/img/ size big', () => {
  it('get API /api/imgs/1 size', (done) => {
    supertest(app)
      .get('/api/imgs/1?size=big')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 227748 }, done);
  });

  it('get API /api/imgs/2 size', (done) => {
    supertest(app)
      .get('/api/imgs/2?size=big')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 240063 }, done);
  });

  it('get API /api/imgs/3 size', (done) => {
    supertest(app)
      .get('/api/imgs/3?size=big')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 143807 }, done);
  });

  it('get API /api/imgs/4 size', (done) => {
    supertest(app)
      .get('/api/imgs/4?size=big')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 312910 }, done);
  });

  it('get API /api/imgs/5 size', (done) => {
    supertest(app)
      .get('/api/imgs/5?size=big')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 160797 }, done);
  });
});
