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
    const urlEnd: string = pahtEnd + filename + '.jpg';
    const urlStart: string = pahtStart + filename + '/img.jpg';

    const heightNumber = Number(height);
    const widthNumber = Number(width);

    // factor out the image processing
    imageProcessing(urlStart, urlEnd, widthNumber, heightNumber, res);
  }
);

export default imgURLS;
