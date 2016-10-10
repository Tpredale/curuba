const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const cors = require('cors');


//App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));
router(app);

app.use(express.static(__dirname + "/../src/public"));

app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname, '/../src/public/index.html'));
});

const db =  process.env.MONGODB_URI || 'mongodb://localhost/auth:auth';
mongoose.connect(db);

//Server
const PORT = process.env.PORT || 3090;
const server = http.createServer(app);


server.listen(PORT, () => {console.log("Listening on port 3090");});

module.exports = app;