/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import sharp from 'sharp';
import fs from 'fs';
const fsPromises = require('fs').promises;

const paht = 'img_folders/imgs_prosesing/';

const imgReview = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  const url: string = req.url;

  if (req.query.filename && req.query.width && req.query.height) {
    const { filename, width, height } = req.query;

    const filenameString = String(filename);

    const dinamicUrl: string = paht + filenameString + '.jpg';

    if (
      filenameString === '1' ||
      filenameString === '2' ||
      filenameString === '3' ||
      filenameString === '4' ||
      filenameString === '5'
    ) {
      if (fs.existsSync(dinamicUrl)) {
        const image = sharp(dinamicUrl);
        image
          .metadata()
          .then(function (data) {
            const dataWidth = Number(data.width);
            const dataHeight = Number(data.height);

            const widthString = Number(width);
            const heightString = Number(height);

            if (widthString === dataWidth && heightString === dataHeight) {
              res.writeHead(200, { 'content-type': 'image/jpg' });
              fs.createReadStream(dinamicUrl).pipe(res);
            } else {
              fsPromises
                .unlink(dinamicUrl)
                .then(() => {
                  next();
                })
                .catch(() => {
                  res.status(400).send('wrong syntax 4: ');
                });
            }
          })
          .catch((error) => {
            res.status(400).send('wrong syntax 3: ' + error);
          });
      } else {
        next();
      }
    } else {
      res.status(400).send('wrong syntax 2: ' + url);
    }
  } else {
    res.status(400).send('wrong syntax 1: ' + url);
  }
};

export default imgReview;
