const app = require('express')()
const server = require('http').createServer(app)
const bodyParser = require('body-parser')

const authRouter = require('./routes/auth.js');


///////////////////////////////////////
//////////// MIDDLEWARES //////////////
///////////////////////////////////////
app.use(bodyParser.json()) //Parsed data is populated on the request object (i.e. req.body).
app.use(bodyParser.urlencoded( { extended: true }))
app.use( (req, res, next ) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Requested-With, Accept, x-access-token')
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

    // app.get('/', (req, res) => {
    //   res
    //     .status(200)
    //     .json({ name: 'Achraf', message: 'Hello Wolrd!' })
    // })

    app.use('/auth', authRouter)

  })
  .catch(err => {console.log(err)})


///////////////////////////////////////
///////// SOCKET CONNECTION ///////////
///////////////////////////////////////
var sockets = [];
const SOCKET_PORT = process.env.SOCKET_PORT | 3000
const io = require('socket.io')(SOCKET_PORT);

io.on('connection', (socket) => {})


///////////////////////////////////////
///////// SERVER CONNECTION ///////////
///////////////////////////////////////
const SERVER_PORT = process.env.SERVER_PORT | 5000;

app.listen(SERVER_PORT, () => {
  console.log("Running on port " + SERVER_PORT)
})
