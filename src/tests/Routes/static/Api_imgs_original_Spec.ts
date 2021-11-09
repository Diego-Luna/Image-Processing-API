import supertest from 'supertest';
import app from '../../../index';

describe('Route api/img/ size original -> challenge 1', () => {
  it('get API /api/imgs/static/1 size', (done) => {
    supertest(app)
      .get('/api/imgs/static/1')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 2217250 }, done);
  });
  it('get API /api/imgs/static/1?size=original size', (done) => {
    supertest(app)
      .get('/api/imgs/static/1?size=original')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 2217250 }, done);
  });

  it('get API /api/imgs/static/2 size', (done) => {
    supertest(app)
      .get('/api/imgs/static/2')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 2421874 }, done);
  });
  it('get API /api/imgs/static/2?size=original size', (done) => {
    supertest(app)
      .get('/api/imgs/static/2?size=original')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 2421874 }, done);
  });

  it('get API /api/imgs/static/3 size', (done) => {
    supertest(app)
      .get('/api/imgs/static/3')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 1770079 }, done);
  });
  it('get API /api/imgs/static/3?size=original size', (done) => {
    supertest(app)
      .get('/api/imgs/static/3?size=original')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 1770079 }, done);
  });

  it('get API /api/imgs/static/4 size', (done) => {
    supertest(app)
      .get('/api/imgs/static/4')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 2272149 }, done);
  });
  it('get API /api/imgs/static/4?size=original size', (done) => {
    supertest(app)
      .get('/api/imgs/static/4?size=original')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 2272149 }, done);
  });

  it('get API /api/imgs/static/5 size', (done) => {
    supertest(app)
      .get('/api/imgs/static/5')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 2230898 }, done);
  });
  it('get API /api/imgs/static/5?size=original size', (done) => {
    supertest(app)
      .get('/api/imgs/static/5?size=original')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 2230898 }, done);
  });
});
