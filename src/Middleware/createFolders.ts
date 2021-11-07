/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
const request = require('request');

import fs from 'fs';

const imgs_prosesing = 'img_folders/imgs_prosesing';
const imgs = 'img_folders/imgs';

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
  if (fs.existsSync(imgs_prosesing) || fs.existsSync(imgs)) {
    next();
  } else {
    if (!fs.existsSync(imgs_prosesing)) {
      fs.mkdirSync(imgs_prosesing);
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
              request(imgsURLS[i])
                .pipe(fs.createWriteStream(`${imgs}/${iNumber}/img.jpg`))
                .on('close', () => {});
            }
          );
        }
        next();
      } catch (error) {
        next();
      }
    }
  }
};

export default createFolders;
