import server from './config/dev-server'

let mongoose = require('mongoose')
let connection = mongoose.connection;


// Establishes MongoDb Connection
mongoose.connect(process.env.CONNECTIONSTRING, {
	server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
	replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
});

connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', function () {
	server.listen(process.env.PORT, function () {
		console.log(`Running on port: ${process.env.PORT}`);
	})
});

// var express = require('express');
// var app = express();
// var server = require('http').createServer(app);
// var port = process.env.PORT || 3000;
// var io = require('socket.io')(server);
// var clients = []

// app.use(express.static(__dirname + '/public'));

// server.listen(port, function () {
// 	console.log('Server listening at port %d', port);
// });

// io.on('connection', function (socket) {

// 	socket.join('BCW', function () {
// 		io.to('BCW').emit('message', 'A new user has joined the channel.');
// 	});

// 	socket.on('message', function (data) {
// 		if (data.text) {
// 			data.text = data.text.replace(/[<>]/g, '');
// 			io.to('BCW').emit('message', data);
// 		}	
// 	});

// });