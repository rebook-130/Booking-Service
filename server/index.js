require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.get('/api/room/calendar/', (req, res) => {
  const { roomID } = req.body;
  db.getRoomReservations(roomID, (err, result) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
  });
});

app.post('/api/room/calendar', (req, res) => {
  const { roomID, userID } = req.body;
  db.createReservation(roomID, userID, (err, result) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(201).send();
  });
});

const port = 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
