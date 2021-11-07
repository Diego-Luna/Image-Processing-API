import express from 'express';
import haveImg from '../../Middleware/haveImg';
import createFolders from '../../Middleware/createFolders';
import sharp from 'sharp';
import fs from 'fs';

const imgURLS = express.Router();

const pahtEnd = 'img_folders/imgs_prosesing/';
const pahtStart = 'img_folders/imgs/';

imgURLS.get('/', createFolders, haveImg, (req, res) => {
  const { filename, width, height } = req.query;
  const urlEnd: string = pahtEnd + filename + '.jpg';
  const urlStart: string = pahtStart + filename + '/img.jpg';

  const url: string = req.url;

  const heightNumber = Number(height);
  const widthNumber = Number(width);

  sharp(urlStart)
    .resize(widthNumber, heightNumber)
    .toFile(urlEnd, function (err) {
      if (err) {
        res.status(400).send('wrong syntax: ' + url);
      } else {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        fs.createReadStream(urlEnd).pipe(res);
      }
    });
});

export default imgURLS;
