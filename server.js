import express from 'express';
import fs from 'fs';
import path from 'path';
import config from './config';
import apiRouter from './api/index';

const app = express();

// routes
app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/api', apiRouter());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`);
});
