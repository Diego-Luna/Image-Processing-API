import express from 'express';
import haveImg from '../../Middleware/haveImg';
import sharp from 'sharp';
import fs from 'fs';

const imgURLS = express.Router();

const pahtEnd = 'src/imgs_prosesing/';
const pahtStart = 'src/imgs/';

imgURLS.get('/', haveImg, (req, res) => {
  const { filename, width, height } = req.query;
  const urlEnd: string = pahtEnd + filename + '.jpg';
  const urlStart: string = pahtStart + filename + '/img.jpg';

  const url: string = req.url;

  const heightNumber = Number(height);
  const widthNumber = Number(width);

  // console.log('> urlEnd: ' + urlEnd);
  // console.log('> urlStart: ' + urlStart);

  // console.log('-> heightNumber: ' + heightNumber);
  // console.log('-> widthNumber: ' + widthNumber);

  sharp(urlStart)
    .resize(widthNumber, heightNumber)
    .toFile(urlEnd, function (err) {
      if (err) {
        res.status(400).send('wrong syntax end: ' + url);
      } else {
        // console.log(' ---------- img procesada ---------- ');

        res.writeHead(200, { 'content-type': 'image/jpg' });
        fs.createReadStream(urlEnd).pipe(res);

        // console.log('******************************');
      }
    });
});

export default imgURLS;
