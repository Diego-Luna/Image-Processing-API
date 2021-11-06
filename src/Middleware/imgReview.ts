import express from "express";
import sharp from 'sharp';
import fs from 'fs';


const paht: string = "src/imgs/"

const imgReview = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  let url: string = req.url
  console.log(`the URL : ${url}`);

  if (req.query.size) {
    const { size } = req.query;

    let urlSmall: string = url.substr(1, 1)

    console.log("req.url.size: " + size + " url: " + url);
    switch (size) {
      case "small":

        if (fs.existsSync(paht + urlSmall + '/small_img.jpg')) {
          console.log("Si esta el archivo");
          next();

        } else {
          sharp(paht + urlSmall + '/img.jpg') // 1920 × 1273
            .resize(480, 318)
            .toFile(paht + urlSmall + '/small_img.jpg', function (err) {

              console.log("funciono");

              if (err) {
                res.status(400).send("wrong syntax : " + url);
              }

              next();

            });
        }



        break;
      case "medium":

        if (fs.existsSync(paht + urlSmall + '/medium_img.jpg')) {
          console.log("Si esta el archivo");
          next();

        } else {
          sharp(paht + urlSmall + '/img.jpg') // 1920 × 1273
            .resize(960, 636)
            .toFile(paht + urlSmall + '/medium_img.jpg', function (err) {
              if (err) {
                res.status(400).send("wrong syntax : " + url);
              }
              next();

            });
        }

        break;
      case "big":

        if (fs.existsSync(paht + urlSmall + '/big_img.jpg')) {
          console.log("Si esta el archivo");
          next();

        } else {
          sharp(paht + urlSmall + '/img.jpg') // 1920 × 1273
            .resize(1440, 955)
            .toFile(paht + urlSmall + '/big_img.jpg', function (err) {
              if (err) {
                res.status(400).send("wrong syntax : " + url);
              }
              next();

            });
        }

        break;
      case "original":
        next();

        break;

      default:
        res.status(400).send("wrong syntax : " + url);
        break;
    }

  } else {
    next();
  }

};

export default imgReview;