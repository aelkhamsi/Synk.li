const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 8080


app.use(bodyParser.json())

app.use(cors())

app.use(express.static(path.join(__dirname, 'public', 'client2')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'client2', 'index.html'));
});


app.listen(PORT, () => {
  console.log("server running on port" + PORT);
})
