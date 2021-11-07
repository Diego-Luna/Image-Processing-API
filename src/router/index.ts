import express from 'express';
import imgStaticURLS from './routes/static_img';
import imgDinamicURLS from './routes/dinamic_img';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).send('Hello, to the image processing-api!');
});

routes.use('/api/imgs/static', imgStaticURLS);
routes.use('/api/imgs/dinamic', imgDinamicURLS);

routes.get('*', (req, res) => {
  res.redirect('/api/imgs/static');
});

export default routes;
