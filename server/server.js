const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('new user connected');

	socket.on('createMessage', (message) => {
		console.log('createMessage', message);
	})

	socket.emit('newMessage', {
		from: 'server',
		text: 'Hey, What is going on.',
		createdAt: Date.now()
	});

	socket.on('disconnect', () => {
		console.log('user disconnect from server');
	});
})

server.listen(port, () => {
	console.log(`App listen on port ${port}`);
})
