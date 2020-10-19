DROP DATABASE IF EXISTS rebook;

CREATE DATABASE rebook;

-- use 'rebook' database
\c rebook;

CREATE TABLE IF NOT EXISTS rooms (
  room_id SERIAL PRIMARY KEY NOT NULL,
  room_name VARCHAR(55),
  room_location VARCHAR(255),
  max_guest SMALLINT NOT NULL,
  price SMALLINT NOT NULL,
)

CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(55) NOT NULL,
  email VARCHAR(50) NOT NULL,
)

CREATE TABLE IF NOT EXISTS reservations (
  reservation_id SERIAL PRIMARY KEY,
  room_id INT NOT NULL REFERENCES rooms(room_id),
  user_id INT NOT NULL REFERENCES users(user_id),
  check_in VARCHAR(10) NOT NULL,
  check_out VARCHAR(10) NOT NULL,
  guests SMALLINT NOT NULL,
)
