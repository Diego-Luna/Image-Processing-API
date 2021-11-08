import express from 'express';
import { Request, Response } from 'express';
import imgReview from '../../Middleware/imgReview';
import createFolders from '../../Middleware/createFolders';
import fs from 'fs';

const imgURLS = express.Router();
const path = 'img_folders/imgs/';

imgURLS.get(
  '/',
  createFolders,
  imgReview,
  (req: Request, res: Response): void => {
    const movies = [
      {
        name: 'image 1',
        img_original: '/api/imgs/static/1',
        img_small: '/api/imgs/static/1?size=small',
        img_medium: '/api/imgs/static/1?size=medium',
        img_big: '/api/imgs/static/1?size=big'
      },
      {
        name: 'image 2',
        img_original: '/api/imgs/static/2',
        img_small: '/api/imgs/static/2?size=small',
        img_medium: '/api/imgs/static/2?size=medium',
        img_big: '/api/imgs/static/2?size=big'
      },
      {
        name: 'image 3',
        img_original: '/api/imgs/static/3',
        img_small: '/api/imgs/static/3?size=small',
        img_medium: '/api/imgs/static/3?size=medium',
        img_big: '/api/imgs/static/3?size=big'
      },
      {
        name: 'image 4',
        img_original: '/api/imgs/static/4',
        img_small: '/api/imgs/static/4?size=small',
        img_medium: '/api/imgs/static/4?size=medium',
        img_big: '/api/imgs/static/4?size=big'
      },
      {
        name: 'image 5',
        img_original: '/api/imgs/static/5',
        img_small: '/api/imgs/static/5?size=small',
        img_medium: '/api/imgs/static/5?size=medium',
        img_big: '/api/imgs/static/5?size=big'
      }
    ];

    res.status(200).json({
      data: movies,
      message: 'images listed'
    });
  }
);
imgURLS.get(
  '/1',
  createFolders,
  imgReview,
  (req: Request, res: Response): void => {
    const { size } = req.query;

    if (size !== undefined && size !== 'original') {
      res.writeHead(200, { 'content-type': 'image/jpg' });
      fs.createReadStream(path + '1/' + size + '_img.jpg').pipe(res);
    } else {
      res.writeHead(200, { 'content-type': 'image/jpg' });
      fs.createReadStream(path + '1/img.jpg').pipe(res);
    }
  }
);

imgURLS.get(
  '/2',
  createFolders,
  imgReview,
  (req: Request, res: Response): void => {
    const { size } = req.query;
    if (size !== undefined && size !== 'original') {
      res.writeHead(200, { 'content-type': 'image/jpg' });
      fs.createReadStream(path + '2/' + size + '_img.jpg').pipe(res);
    } else {
      res.writeHead(200, { 'content-type': 'image/jpg' });
      fs.createReadStream(path + '2/img.jpg').pipe(res);
    }
  }
);

imgURLS.get(
  '/3',
  createFolders,
  imgReview,
  (req: Request, res: Response): void => {
    const { size } = req.query;
    if (size !== undefined && size !== 'original') {
      res.writeHead(200, { 'content-type': 'image/jpg' });
      fs.createReadStream(path + '3/' + size + '_img.jpg').pipe(res);
    } else {
      res.writeHead(200, { 'content-type': 'image/jpg' });
      fs.createReadStream(path + '3/img.jpg').pipe(res);
    }
  }
);

imgURLS.get(
  '/4',
  createFolders,
  imgReview,
  (req: Request, res: Response): void => {
    const { size } = req.query;
    if (size !== undefined && size !== 'original') {
      res.writeHead(200, { 'content-type': 'image/jpg' });
      fs.createReadStream(path + '4/' + size + '_img.jpg').pipe(res);
    } else {
      res.writeHead(200, { 'content-type': 'image/jpg' });
      fs.createReadStream(path + '4/img.jpg').pipe(res);
    }
  }
);

imgURLS.get(
  '/5',
  createFolders,
  imgReview,
  (req: Request, res: Response): void => {
    const { size } = req.query;
    if (size !== undefined && size !== 'original') {
      res.writeHead(200, { 'content-type': 'image/jpg' });
      fs.createReadStream(path + '5/' + size + '_img.jpg').pipe(res);
    } else {
      res.writeHead(200, { 'content-type': 'image/jpg' });
      fs.createReadStream(path + '5/img.jpg').pipe(res);
    }
  }
);

imgURLS.get('*', (req: Request, res: Response): void => {
  // res.redirect('/api/imgs/static');
  res.status(400).send('wrong syntax');
});

export default imgURLS;
