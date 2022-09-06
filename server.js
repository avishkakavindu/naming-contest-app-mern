import express from 'express';
import fs from 'fs';
import path from 'path';
import config from './config';
import apiRouter from './api/index';

const app = express();

// set for ejs
app.set('view engine', 'ejs');

// routes
app.get('/', (req, res) => {
  const context = {
    content: 'hello world from server!',
  };

  res.render('index', context);
});

app.use('/api', apiRouter());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`);
});
