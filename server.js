import { readSync } from 'fs';
import http from 'http';

const server = http.createServer();

server.listen(5000);

server.on('request', (req, res) => {
  res.write('Hello HTTP!\n');
  setTimeout(() => {
    res.write('I can stream!\n');
    res.end();
  }, 3000);
});
