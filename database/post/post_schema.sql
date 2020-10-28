DROP DATABASE IF EXISTS rebook;

CREATE DATABASE rebook;

-- use 'rebook' database
\c rebook;

CREATE TABLE rooms (
  room_id SERIAL PRIMARY KEY,
  room_name VARCHAR(55),
  room_location VARCHAR(255),
  max_guest SMALLINT NOT NULL,
  price SMALLINT NOT NULL
);

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(55) NOT NULL,
  email VARCHAR(50) NOT NULL
);

CREATE TABLE reservations (
  reservation_id SERIAL PRIMARY KEY,
  room_id INT NOT NULL REFERENCES rooms(room_id),
  user_id INT NOT NULL REFERENCES users(user_id),
  check_in VARCHAR(100) NOT NULL,
  check_out VARCHAR(100) NOT NULL,
  guests SMALLINT NOT NULL
);

COPY users (user_name,email)
FROM '/Users/ufo/dev/SDC/booking-service/database/post/postUser.csv' DELIMITERS ',' CSV header;
-- reservations
COPY reservations (room_id, user_id, check_in, check_out, guests)
FROM '/Users/ufo/dev/SDC/booking-service/database/post/reservations.csv' DELIMITERS ',' CSV header;

COPY rooms (room_name room_location,max_guest, price)
FROM '/Users/ufo/dev/SDC/booking-service/database/post/postRoom.csv' DELIMITERS ',' CSV header;

COPY rooms (room_name, room_location,max_guest, price)
FROM '/home/ubuntu/postRoom.csv' DELIMITERS ',' CSV header;