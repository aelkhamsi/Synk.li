const app = require('express')()
const server = require('http').createServer(app)
const bodyParser = require('body-parser')
const cors = require('cors')

const authRouter = require('./middlewares/auth.js');
const roomRouter = require('./middlewares/room.js');
const controller = require('./middlewares/token.js');

///////////////////////////////////////
//////////// MIDDLEWARES //////////////
///////////////////////////////////////
// app.use(cors())
app.use(bodyParser.json()) //Parsed data is populated on the request object (i.e. req.body).
app.use(bodyParser.urlencoded( { extended: true }))
app.use( (req, res, next ) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Requested-With, Accept, x-access-token')
  if (req.method == 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
  }
  res.header('Content-Type', 'application/json') //REST-API: we only send back json data
  next()
})


////////////////////////////////////////
////////////// DATABASE ////////////////
////////////////////////////////////////
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/sync';
var db;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log("connection to database established...  ");

    db = client.db("sync");
    db.createCollection('users'); //Normally, if it already exists, it shoudn't do anything, but I'm not sure

    ///////////////////
    //// ROUTING //////
    ///////////////////

    app.use((req, res, next) => {
      req.db = db
      next();
    })

    app.use('/auth', authRouter)
    // app.use('/room', controller.checkToken, roomRouter)
    app.use('/room', roomRouter)

  })
  .catch(err => {console.log(err)})


///////////////////////////////////////
///////// SOCKET CONNECTION ///////////
///////////////////////////////////////

var sockets = [];

const SOCKET_PORT = process.env.SOCKET_PORT | 3000
const io = require('socket.io')(SOCKET_PORT);

//To connect to the socket, we should have an ID of an already created room
io.on('connection', (socket) => {
  let handshake = socket.handshake;
  let roomId = handshake.query.roomId;
  let username = handshake.query.username;

  if (handshake.query && roomId && username)
  { // Connection accepted
    socket.join(roomId);
    socket.emit('message', 'you are connected');
    socket.to(roomId).emit('message', `${username} is connected`);  //broadcast
    console.log(`log: ${username} have succesfully connected to room ${roomId}`);
  }
  else
  { // Connection refused
    socket.emit('message', 'Socket connection failed. roomID or Username not provided');
    socket.disconnect(true);
    console.log(`log: ${username} have tried to connect to room ${roomId}. Connection failed`);
    return;
  }

  socket.on('disconnect', () => {
    socket.emit('message', 'Socket connection aborted');
    socket.disconnect(true);
    console.log(`log: ${username} have disconnected from room ${roomId}`);
  })

  socket.on('user-message', (message) => { //broadcast
    socket.to(roomId).emit('user-message', message);
  })
});


///////////////////////////////////////
///////// SERVER CONNECTION ///////////
///////////////////////////////////////
const SERVER_PORT = process.env.SERVER_PORT | 5000;

app.listen(SERVER_PORT, () => {
  console.log("Running on port " + SERVER_PORT)
})
