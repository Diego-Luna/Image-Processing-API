import express from 'express';
import { Request, Response } from 'express';
import imgStaticURLS from './routes/static_img';
import imgDinamicURLS from './routes/dinamic_img';

const routes = express.Router();

routes.get('/', (req: Request, res: Response): void => {
  res
    .status(200)
    .send('Hello, to the image processing-api! by Diego Francisco Luna Lopez');
});

routes.use('/api/imgs/static', imgStaticURLS);
routes.use('/api/imgs/dinamic', imgDinamicURLS);

routes.get('*', (req: Request, res: Response): void => {
  res.redirect('/api/imgs/static');
});

export default routes;
