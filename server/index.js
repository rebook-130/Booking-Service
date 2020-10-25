require('newrelic');
const express = require('express');
const bodyParser = require('body-parser')
const db = require('../database/index.js');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.get('/api/room/:roomId/calendar/', (req, res) => {
  const { roomId } = req.params;
  console.log(`${roomId}`);
  db.getRoomReservations(roomId, (err, result) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
  });
});

app.post('/api/room/calendar', (req, res) => {
  db.createReservation((err, result) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send();
  });
});

// app.get('/api/room/calendar', (req, res) => {
//   console.log('app.get was invoked');
//   db.get('2', req.query.month, (err, result) => res.status(200).send(result));

// });
// app.get('/api/room/:roomId/calendar/:month', (req, res) => {
//   const { roomId, month } = req.params;
//   db.get(roomId, month, (err, result) => res.status(200).send(result));
//   // console.log('been invoked');
// });

const port = 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
