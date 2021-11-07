import supertest from 'supertest';
import app from '../../../index';

describe('square images -> challenge 2', () => {
  it('get API /dinamic img 1 size 50x50', (done) => {
    supertest(app)
      .get('/api/imgs/dinamic?filename=1&width=50&height=50')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 993 }, done);
  });

  it('get API /dinamic img 2 size 100x100', (done) => {
    supertest(app)
      .get('/api/imgs/dinamic?filename=2&width=100&height=100')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 2325 }, done);
  });

  it('get API /dinamic img 3 size 150x150', (done) => {
    supertest(app)
      .get('/api/imgs/dinamic?filename=3&width=150&height=150')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 3732 }, done);
  });

  it('get API /dinamic img 4 size 200x200', (done) => {
    supertest(app)
      .get('/api/imgs/dinamic?filename=4&width=200&height=200')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 15695 }, done);
  });

  it('get API /dinamic img 5 size 250x250', (done) => {
    supertest(app)
      .get('/api/imgs/dinamic?filename=5&width=250&height=250')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 8836 }, done);
  });
});
