/* eslint-disable no-console */

const Io = require('socket.io');
const { socketPort } = require('../share/config');

const io = Io();

io.sockets.on('connection', () => {
  console.log('connection');
});


io.listen(socketPort);
