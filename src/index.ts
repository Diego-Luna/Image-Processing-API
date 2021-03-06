/* eslint-disable no-console */
import express from 'express';
import routes from './router';

const app = express();
const port = 3000;

app.use(routes);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

// Tests
export default app;
