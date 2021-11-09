/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import sharp from 'sharp';
import fs from 'fs';
const fsPromises = require('fs').promises;

const paht = 'img_folders/imgs_prosesing/';

const haveImg = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  const url: string = req.url;

  // It is valid that "req.query.width" and "req.query.height" is an integer
  if (
    req.query.filename &&
    req.query.width &&
    Number(req.query.width) &&
    Number.isInteger(Number(req.query.width)) &&
    req.query.height &&
    Number(req.query.height) &&
    Number.isInteger(Number(req.query.height))
  ) {
    const { filename, width, height } = req.query;

    const filenameString = String(filename);

    // const dinamicUrl: string = paht + filenameString + '.jpg';

    if (
      filenameString === '1' ||
      filenameString === '2' ||
      filenameString === '3' ||
      filenameString === '4' ||
      filenameString === '5'
    ) {
      const dinamicUrl: string =
        paht +
        'w:' +
        width +
        '_' +
        'h:' +
        height +
        '_' +
        filenameString +
        '.jpg';

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
                  res.status(500).send('Error in processing the img');
                });
            }
          })
          .catch(() => {
            res
              .status(500)
              .send('Error checking image dimensions, try another time');
          });
      } else {
        next();
      }
    } else {
      res.status(400).send('Error in filename: ' + url);
    }
  } else {
    res.status(400).send('wrong syntax: ' + url);
  }
};

export default haveImg;
