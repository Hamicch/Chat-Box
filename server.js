const express = require('express');
const app = express();
const http = require('http');
const socket = require('socket.io');
const server = http.createServer(app);
const io = socket(server);

io.on('connection', socket => {
    socket.emit('user', socket.id);
    socket.emit('send message', body => {
        io.on('message', body);
    });
});


server.listen(6000, () => {
    console.log('The app is running on port *6000');
});