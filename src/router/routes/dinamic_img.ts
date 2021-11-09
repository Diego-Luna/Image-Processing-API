import express from 'express';
import { Request, Response } from 'express';
import haveImg from '../../Middleware/haveImg';
import createFolders from '../../Middleware/createFolders';
import imageProcessing from '../../utils/imageProcessing';

const imgURLS = express.Router();

const pahtEnd = 'img_folders/imgs_prosesing/';
const pahtStart = 'img_folders/imgs/';

imgURLS.get(
  '/',
  createFolders,
  haveImg,
  (req: Request, res: Response): void => {
    const { filename, width, height } = req.query;
    // widht _ height _ filname
    const urlEnd: string =
      pahtEnd + 'w:' + width + '_' + 'h:' + height + '_' + filename + '.jpg';
    const urlStart: string = pahtStart + filename + '/img.jpg';

    // eslint-disable-next-line no-console
    console.log('----> processing image: ' + urlEnd);

    const heightNumber = Number(height);
    const widthNumber = Number(width);

    // factor out the image processing
    imageProcessing(urlStart, urlEnd, widthNumber, heightNumber, res);
  }
);

export default imgURLS;
