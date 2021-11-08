import express from 'express';
import sharp from 'sharp';
import fs from 'fs';

// factor out the image processing
function imageProcessing(
  urlStart: string,
  urlEnd: string,
  widthNumber: number,
  heightNumber: number,
  res: express.Response
): void {
  sharp(urlStart)
    .resize(widthNumber, heightNumber)
    .toFile(urlEnd, function (err) {
      if (err) {
        res.status(400).send('wrong syntax ');
      } else {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        fs.createReadStream(urlEnd).pipe(res);
      }
    });
}

export default imageProcessing;
