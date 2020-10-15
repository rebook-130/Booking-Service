const express = require('express');
const db = require('../database/index.js');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/api/calendar', function (req, res) {
});

app.get('/api/calendar', function (req, res) {
  // db.save();
  console.log('hello', req.query);
  db.get('2', req.query.month, (err, result)=> res.status(200).send(result));
  console.log('been invoked');
});

const port = 3002;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});