import supertest from 'supertest';
import app from '../../index';

describe('Route api/img/ size original', () => {
  it('get API /api/imgs/1 size', (done) => {
    supertest(app)
      .get('/api/imgs/1')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 313894 }, done);
  });
  it('get API /api/imgs/1?size=original size', (done) => {
    supertest(app)
      .get('/api/imgs/1?size=original')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 313894 }, done);
  });

  it('get API /api/imgs/2 size', (done) => {
    supertest(app)
      .get('/api/imgs/2')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 408971 }, done);
  });
  it('get API /api/imgs/2?size=original size', (done) => {
    supertest(app)
      .get('/api/imgs/2?size=original')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 408971 }, done);
  });

  it('get API /api/imgs/3 size', (done) => {
    supertest(app)
      .get('/api/imgs/3')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 290080 }, done);
  });
  it('get API /api/imgs/3?size=original size', (done) => {
    supertest(app)
      .get('/api/imgs/3?size=original')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 290080 }, done);
  });

  it('get API /api/imgs/4 size', (done) => {
    supertest(app)
      .get('/api/imgs/4')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 377171 }, done);
  });
  it('get API /api/imgs/4?size=original size', (done) => {
    supertest(app)
      .get('/api/imgs/4?size=original')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 377171 }, done);
  });

  it('get API /api/imgs/5 size', (done) => {
    supertest(app)
      .get('/api/imgs/5')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 393351 }, done);
  });
  it('get API /api/imgs/5?size=original size', (done) => {
    supertest(app)
      .get('/api/imgs/5?size=original')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 393351 }, done);
  });
});
