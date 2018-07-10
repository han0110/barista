/* eslint-disable no-console */

const Io = require('socket.io');
const fs = require('fs');

const { socketPort } = require('../share/config');

const io = Io();

let lastpath = JSON.parse(fs.readFileSync('./lib/scanner/tem/file.json', 'utf8')).filepath;

io.sockets.on('connection', () => {
  setInterval(() => {
    try {
      const { time, filepath, status } = JSON.parse(fs.readFileSync('./lib/scanner/tem/file.json', 'utf8'));

      if (lastpath === filepath) {
        return;
      }

      const img = fs.readFileSync(`./lib/scanner/${filepath}`).toString('base64');
      io.sockets.emit('beans', {
        img: img.toString('base64'),
        id: filepath,
        time,
        status,
      });

      lastpath = filepath;
    } catch (e) {
      console.error(e);
    }
  }, 500);
});

io.listen(socketPort);
