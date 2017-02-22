import env from './env'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { defaultErrorHandler, corsOptions } from './handlers'
import api from '../models'
import session from '../authentication/sessions'
import Auth from '../authentication/auth'
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/www'));


io.on('connection', function (socket) {

    socket.join('boardId', function () {
        io.to('boardId').emit('message', 'A new user has joined the board.');
    });

    socket.on('message', function (data){
        io.to('boardId').emit
    })
});

// ENABLE ROUTES IF USING SERVER SIDE ROUTING
// import routes from './routes'

let server = express()

function Validate(req, res, next) {
    // ONLY ALLOW GET METHOD IF NOT LOGGED IN 
    if (req.method !== 'GET' && !req.session.uid) {
        return res.send({ error: 'Please Login or Register to continue' })
    }
    return next()
}

function logger(req, res, next) {
	console.log('INCOMING REQUEST', req.url)
	next()
}

// REGISTER MIDDLEWARE
server.use(session)
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use('*', logger)
server.use(Auth)

// LOCKS API TO REQUIRE USER AUTH
server.use(Validate)
server.use('/api', cors(corsOptions), api)
server.use('/', defaultErrorHandler)

export default server