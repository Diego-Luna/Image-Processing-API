/* eslint-disable @typescript-eslint/ban-types */
import express from 'express';
import sharp from 'sharp';
import fs from 'fs';

const paht = 'img_folders/imgs/';

const imgReview = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  const url: string = req.url;

  if (req.query.size) {
    const { size } = req.query;

    const urlSmall: string = url.substr(1, 1);

    switch (size) {
      case 'small':
        if (fs.existsSync(paht + urlSmall + '/small_img.jpg')) {
          next();
        } else {
          sharp(paht + urlSmall + '/img.jpg')
            .resize(480, 318)
            .toFile(paht + urlSmall + '/small_img.jpg', function (err) {
              if (err) {
                res.status(400).send('wrong syntax : ' + url);
              }

              next();
            });
        }

        break;
      case 'medium':
        if (fs.existsSync(paht + urlSmall + '/medium_img.jpg')) {
          next();
        } else {
          sharp(paht + urlSmall + '/img.jpg')
            .resize(960, 636)
            .toFile(paht + urlSmall + '/medium_img.jpg', function (err) {
              if (err) {
                res.status(400).send('wrong syntax : ' + url);
              }
              next();
            });
        }

        break;
      case 'big':
        if (fs.existsSync(paht + urlSmall + '/big_img.jpg')) {
          next();
        } else {
          sharp(paht + urlSmall + '/img.jpg')
            .resize(1440, 955)
            .toFile(paht + urlSmall + '/big_img.jpg', function (err) {
              if (err) {
                res.status(400).send('wrong syntax : ' + url);
              }
              next();
            });
        }

        break;
      case 'original':
        next();

        break;

      default:
        res.status(400).send('wrong syntax : ' + url);
        break;
    }
  } else {
    next();
  }
};

export default imgReview;
