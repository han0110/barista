/* eslint-disable no-console */

const fs = require('fs');
const Io = require('socket.io');
// const { spawn } = require('child_process');

const { socketPort } = require('../share/config');

const io = Io();
// const picker = spawn('python3', ['./scanner/index.py']);

// picker.stdout.on('data', (data) => {
//   try {
//     JSON.parse(data);
//     io.sockets.emit('beans', data);
//   } catch (e) {
//     console.error(e);
//   }
// });

io.sockets.on('connection', () => {
  console.log('connection');

  fs.readFile('./lib/scanner/tem/test.png', (err, img) => {
    io.sockets.emit('beans', {
      time: new Date().getTime(),
      img: img.toString('base64'),
      status: 'good',
      id: 'test',
    });
  });
});

io.listen(socketPort);
