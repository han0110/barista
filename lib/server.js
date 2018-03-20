/* eslint-disable no-console */

const Koa = require('koa');
const serve = require('koa-static');
require('./socket');

const app = new Koa();
const port = 3000;

app.use(serve('dist'));

app.on('error', err => console.error(err));

app.listen(3000, () => console.log('Koa server listening on port 3000'));
