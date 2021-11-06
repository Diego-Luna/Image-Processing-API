import express from 'express';
import imgReview from '../../Middleware/imgReview';
import fs from 'fs';

const imgURLS = express.Router();
const path = 'src/imgs/';

imgURLS.get('/', imgReview, (req, res) => {
  const movies = [
    {
      name: 'image 1',
      img_original: '/api/imgs/1',
      img_small: '/api/imgs/1?size=small',
      img_medium: '/api/imgs/1?size=medium',
      img_big: '/api/imgs/1?size=big'
    },
    {
      name: 'image 2',
      img_original: '/api/imgs/2',
      img_small: '/api/imgs/2?size=small',
      img_medium: '/api/imgs/2?size=medium',
      img_big: '/api/imgs/2?size=big'
    },
    {
      name: 'image 3',
      img_original: '/api/imgs/3',
      img_small: '/api/imgs/3?size=small',
      img_medium: '/api/imgs/3?size=medium',
      img_big: '/api/imgs/3?size=big'
    },
    {
      name: 'image 4',
      img_original: '/api/imgs/4',
      img_small: '/api/imgs/4?size=small',
      img_medium: '/api/imgs/4?size=medium',
      img_big: '/api/imgs/4?size=big'
    },
    {
      name: 'image 5',
      img_original: '/api/imgs/5',
      img_small: '/api/imgs/5?size=small',
      img_medium: '/api/imgs/5?size=medium',
      img_big: '/api/imgs/5?size=big'
    }
  ];

  res.status(200).json({
    data: movies, // los datos son lo que declaramos antes
    message: 'images listed' // Y los mensages para el cliente
  });
});
imgURLS.get('/1', imgReview, (req, res) => {
  const { size } = req.query;

  if (size !== undefined && size !== 'original') {
    res.writeHead(200, { 'content-type': 'image/jpg' });
    fs.createReadStream(path + '1/' + size + '_img.jpg').pipe(res);
  } else {
    res.writeHead(200, { 'content-type': 'image/jpg' });
    fs.createReadStream(path + '1/img.jpg').pipe(res);
  }
});

imgURLS.get('/2', imgReview, (req, res) => {
  const { size } = req.query;
  if (size !== undefined && size !== 'original') {
    res.writeHead(200, { 'content-type': 'image/jpg' });
    fs.createReadStream(path + '2/' + size + '_img.jpg').pipe(res);
  } else {
    res.writeHead(200, { 'content-type': 'image/jpg' });
    fs.createReadStream(path + '2/img.jpg').pipe(res);
  }
});

imgURLS.get('/3', imgReview, (req, res) => {
  const { size } = req.query;
  if (size !== undefined && size !== 'original') {
    res.writeHead(200, { 'content-type': 'image/jpg' });
    fs.createReadStream(path + '3/' + size + '_img.jpg').pipe(res);
  } else {
    res.writeHead(200, { 'content-type': 'image/jpg' });
    fs.createReadStream(path + '3/img.jpg').pipe(res);
  }
});

imgURLS.get('/4', imgReview, (req, res) => {
  const { size } = req.query;
  if (size !== undefined && size !== 'original') {
    res.writeHead(200, { 'content-type': 'image/jpg' });
    fs.createReadStream(path + '4/' + size + '_img.jpg').pipe(res);
  } else {
    res.writeHead(200, { 'content-type': 'image/jpg' });
    fs.createReadStream(path + '4/img.jpg').pipe(res);
  }
});

imgURLS.get('/5', imgReview, (req, res) => {
  const { size } = req.query;
  if (size !== undefined && size !== 'original') {
    res.writeHead(200, { 'content-type': 'image/jpg' });
    fs.createReadStream(path + '5/' + size + '_img.jpg').pipe(res);
  } else {
    res.writeHead(200, { 'content-type': 'image/jpg' });
    fs.createReadStream(path + '5/img.jpg').pipe(res);
  }
});

imgURLS.get('*', imgReview, (req, res) => {
  res.redirect('/api/imgs');
});

export default imgURLS;
