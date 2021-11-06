import express from 'express';
import imgURLS from './routes/img';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Hello, world!');
});

routes.use('/api/imgs',imgURLS);

export default routes;