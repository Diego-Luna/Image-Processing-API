/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
import express from 'express';
import request from 'request';
import createDir from '../utils/createDir';
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

const createFolders = async (
  req: express.Request,
  res: express.Response,
  next: Function
): Promise<void> => {
  if (fs.existsSync(imgs_prosesing) || fs.existsSync(imgs)) {
    next();
  } else {
    if (!fs.existsSync(imgs_prosesing)) {
      try {
        const createDir_0 = await createDir(imgs_prosesing, res);
      } catch (error) {
        res.status(500).send('Error downloading images, try another time');
      }
    }
    if (!fs.existsSync(imgs)) {
      try {
        const createDir_1 = await createDir(imgs, res);
        const createDir_2 = await createDir(imgs + '/1', res);
        const createDir_3 = await createDir(imgs + '/2', res);
        const createDir_4 = await createDir(imgs + '/3', res);
        const createDir_5 = await createDir(imgs + '/4', res);
        const createDir_6 = await createDir(imgs + '/5', res);

        for (let i = 0; i <= imgsURLS.length; i++) {
          const iNumber: number = i + 1;
          request.head(imgsURLS[i], function (err, res, body) {
            request(imgsURLS[i])
              .pipe(fs.createWriteStream(`${imgs}/${iNumber}/img.jpg`))
              .on('close', () => {});
          });
        }

        next();
      } catch (error) {
        res.status(500).send('Error downloading images, try another time');
      }
    }
  }
};

export default createFolders;
