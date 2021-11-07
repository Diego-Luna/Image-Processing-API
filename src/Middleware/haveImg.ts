/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import sharp from 'sharp';
import fs from 'fs';
const fsPromises = require('fs').promises;

const paht = 'src/imgs_prosesing/';

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

    // console.log('> dinamicUrl: ' + dinamicUrl);

    if (
      filenameString === '1' ||
      filenameString === '2' ||
      filenameString === '3' ||
      filenameString === '4' ||
      filenameString === '5'
    ) {
      if (fs.existsSync(dinamicUrl)) {
        // console.log('-> si existe la imagen');

        const image = sharp(dinamicUrl);
        image
          .metadata()
          .then(function (data) {
            // res.send(`width : ${data.width}, height: ${data.height}`);

            const dataWidth = Number(data.width);
            const dataHeight = Number(data.height);

            const widthString = Number(width);
            const heightString = Number(height);

            // console.log('-> dataWidth: ' + dataWidth);
            // console.log('-> dataHeight: ' + dataHeight);

            if (widthString === dataWidth && heightString === dataHeight) {
              // console.log('--> mandar imagen');

              res.writeHead(200, { 'content-type': 'image/jpg' });
              fs.createReadStream(dinamicUrl).pipe(res);
            } else {
              fsPromises
                .unlink(dinamicUrl)
                // .then(() => {
                //   console.log('File removed');
                // })
                .then(() => {
                  next();
                })
                .catch(() => {
                  res.status(400).send('wrong syntax 4: ');
                });
            }
          })
          .catch((error) => {
            // console.log('error: ' + error);
            res.status(400).send('wrong syntax 3: ' + error);
          });
      } else {
        // console.log('-> no existe la imagen');

        next();
      }
    } else {
      // console.log('eror en el filename');
      res.status(400).send('wrong syntax 2: ' + url);
    }
  } else {
    // console.log('eror en las queris');

    res.status(400).send('wrong syntax 1: ' + url);
  }
};

export default imgReview;
