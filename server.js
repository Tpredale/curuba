const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/src/public"));

app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => {
  console.log('Server listening on ' + port);
});