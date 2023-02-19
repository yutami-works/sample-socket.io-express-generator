const { Server } = require('socket.io');

const chat = (server) => {
  const io = new Server(server);
  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
}

module.exports = chat;
