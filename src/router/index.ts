import express from 'express';
import imgURLS from './routes/img';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).send('Hello, to the image processing-api!');
});

routes.use('/api/imgs', imgURLS);

routes.get('*', (req, res) => {
  res.redirect('/api/imgs');
});

export default routes;
