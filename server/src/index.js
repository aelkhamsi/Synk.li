const app = require('express')()
const server = require('http').createServer(app)
const bodyParser = require('body-parser')

//MIDDLEWARES
app.use(bodyParser.json()) //Parsed data is populated on the request object (i.e. req.body).
app.use(bodyParser.urlencoded( { extended: true }))
app.use( (req, res, next ) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Requested-With, Accept, x-access-token')
  res.header('Content-Type', 'application/json') //REST-API: we only send back json data
  next()
})

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ name: 'Achraf', message: 'Hello Wolrd!' })
})



//Listening
const PORT = process.env.PORT | 5000;
app.listen(PORT, () => {
  console.log("Running on port " + PORT)
})
