import supertest from 'supertest';
import app from '../../../index';

describe('rectangular images -> challenge 2', () => {
  it('get API /dinamic img 1 size 100x50', (done) => {
    supertest(app)
      .get('/api/imgs/dinamic?filename=1&width=100&height=50')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 1627 }, done);
  });

  it('get API /dinamic img 2 size 200x100', (done) => {
    supertest(app)
      .get('/api/imgs/dinamic?filename=2&width=200&height=100')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 4309 }, done);
  });

  it('get API /dinamic img 3 size 300x150', (done) => {
    supertest(app)
      .get('/api/imgs/dinamic?filename=3&width=300&height=150')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 7699 }, done);
  });

  it('get API /dinamic img 4 size 400x200', (done) => {
    supertest(app)
      .get('/api/imgs/dinamic?filename=4&width=400&height=200')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 29352 }, done);
  });

  it('get API /dinamic img 5 size 500x250', (done) => {
    supertest(app)
      .get('/api/imgs/dinamic?filename=5&width=500&height=250')
      .set('Accept', 'image/jpg')
      .expect((response) => {
        const imgValue: number = response.body.length;
        response.body = {};
        response.body.img = imgValue;
      }, done)
      .expect(200, { img: 17978 }, done);
  });
});
