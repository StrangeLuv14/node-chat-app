var socket = io();

socket.on('connect', function () {
	console.log('Connected to server');

	// socket.emit('createEmail', {
	// 	to: 'jen@example.com',
	// 	text: 'Hey, this is Shannon.'
	// });
});

socket.on('disconnect', function () {
	console.log('Disconnect from server');
});

socket.on('newMessage', function (message) {
	console.log('newMessage', message);
})

// socket.on('newEmail', function (email) {
// 	console.log('New email', email);
// });
