import express from 'express';
import fs from 'fs';
import path from 'path';
import config from './config';

const app = express();

// routes
app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/about.html', (req, res) => {
  fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
    res.send(data.toString());
  });
});

app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`);
});
