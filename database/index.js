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

const getRoomReservations = (roomId, cb) => {
  // Get all reservations from a room
  var sql = `SELECT * FROM reservations WHERE room_id=${roomId}`;
  client.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

const createReservation = (params, callback) => {
  // Create a review for a business from a user
  var sql = 'INSERT INTO reviews (id, business_id, users_id, stars, date, content, useful, funny, cool) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  client.query(sql, params, (err, data) => {
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
};
