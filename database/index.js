const { Client } = require('pg');
const config = { database: 'rebook' };
const client = new Client(config);

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected!');
  }
});

const getRoomReservations = (roomID, cb) => {
  // Get all reservations from a room
  const query = `SELECT * FROM reservations WHERE room_id=${roomID}`;
  client.query(query, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

const createReservation = (roomID, callback) => {
  // Create a reservation
  const query = `INSERT INTO reservations (room_id, user_id, check_in, check_out, guests) VALUES (${roomID}, 10000000, 'Mon Nov 16 2021 04:50:43 GMT-0800 (Pacific Standard Time)', 'Wed Nov 26 2021 04:02:23 GMT-0700 (Pacific Daylight Time)', 2)`;
  client.query(query, null, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  client,
  getRoomReservations,
  createReservation,
};
