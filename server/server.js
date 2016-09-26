const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const jwt = require('express-jwt');
const cors = require('cors');
const config = require('../config/authkeys')


const PORT = process.env.PORT || 8080;
const db =  process.env.MONGODB_URI || 'mongodb://localhost/curuba';
mongoose.connect(db);
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../src/public'));

const authCheck = jwt({
  secret: new Buffer(config.authSecret, 'base64'),
  audience: config.authClientId
});

var testData = [
  {
    id: 1,
    name: "Chef Cooking",
    image: 'http://localhost:8080/src/public/images/chef.jpg'
  },
  {
    id: 2,
    name: "Pasta",
    image: 'http://localhost:8080/src/public/images/pasta.jpg'
  }
];

//Not Authenticated endpoint
app.get('/api/testData', (req, res) => {
  const allTestData = testData.map(data => {
    return {id: data.id, name: data.name}
  });
  res.json(allTestData);
});

//Authenticated endpoint
app.get('/api/testData/:id', authCheck, (req, res) =>{
  res.json(testData.filter(data => data.id === parseInt(req.params.id))[0]);
});

app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, '/../src/public/index.html'));
});

app.listen(PORT, () => {console.log("Listening on port 8080");});

module.exports = app;