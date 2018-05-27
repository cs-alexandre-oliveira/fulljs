import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res)  =>  {
  res.render('index', {
    content:  'Auuuuuu au au au <em>auuuu</em>!'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port,  ()  =>  {
  console.log('Xpress listening on port', config.port);
});