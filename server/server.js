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

const db =  process.env.MONGODB_URI || 'mongodb://localhost/auth:auth';
mongoose.connect(db);

//Server
const PORT = process.env.PORT || 3090;
const server = http.createServer(app);


// app.use(express.static(__dirname + '/../src/public'));

// app.get('*', function (req, res) {
//  res.sendFile(path.join(__dirname, '/../src/public/index.html'));
// });

server.listen(PORT, () => {console.log("Listening on port 8080");});

module.exports = app;