const express = require('express');
const app = express();
const port = 4000;

const server = app.listen(`${port}`, function() {
  console.log(`Server started on port ${port}`);
});

const io = require('socket.io')(server);

function getRandomValue() {
  return Math.floor(Math.random() * 90) + 20;
}

io.on('connection', socket => {
  setInterval(() => {
    socket.broadcast.emit('newdata', getRandomValue());
  }, 9000);
});
