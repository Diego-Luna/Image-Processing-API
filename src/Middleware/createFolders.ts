/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
const request = require('request');

import fs from 'fs';

const imgs_prosesing = './imgs_prosesing';
const imgs = './imgs';

const imgsURLS: string[] = [
  'https://raw.githubusercontent.com/udacity/nd-0067-c1-building-a-server-project-starter/master/images/encenadaport.jpg',
  'https://raw.githubusercontent.com/udacity/nd-0067-c1-building-a-server-project-starter/master/images/fjord.jpg',
  'https://raw.githubusercontent.com/udacity/nd-0067-c1-building-a-server-project-starter/master/images/icelandwaterfall.jpg',
  'https://raw.githubusercontent.com/udacity/nd-0067-c1-building-a-server-project-starter/master/images/palmtunnel.jpg',
  'https://raw.githubusercontent.com/udacity/nd-0067-c1-building-a-server-project-starter/master/images/santamonica.jpg'
];

const createFolders = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  // const url: string = req.url;

  if (fs.existsSync(imgs_prosesing) || fs.existsSync(imgs)) {
    console.log('existen las carpetas');

    next();
  } else {
    if (!fs.existsSync(imgs_prosesing)) {
      fs.mkdirSync(imgs_prosesing);

      console.log('creando /imgs_prosesing');
    }
    if (!fs.existsSync(imgs)) {
      try {
        fs.mkdirSync(imgs);
        fs.mkdirSync(imgs + '/1');
        fs.mkdirSync(imgs + '/2');
        fs.mkdirSync(imgs + '/3');
        fs.mkdirSync(imgs + '/4');
        fs.mkdirSync(imgs + '/5');

        for (let i = 0; i <= imgsURLS.length; i++) {
          const iNumber: number = i + 1;
          request.head(
            imgsURLS[i],
            function (
              err: never,
              res: { headers: { [x: string]: never } },
              body: never
            ): void {
              console.log('content-type:', res.headers['content-type']);
              console.log('content-length:', res.headers['content-length']);

              request(imgsURLS[i])
                .pipe(fs.createWriteStream(`${imgs}/${iNumber}/img.jpg`))
                .on('close', () => {});
            }
          );
        }
        next();
      } catch (error) {
        console.log('Error download: ' + error);
        next();
      }

      console.log('creando /imgs');
    }

    console.log('estamos en el else');

    // next();
  }
};

export default createFolders;
