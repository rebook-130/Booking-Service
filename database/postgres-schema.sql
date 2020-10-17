DROP DATABASE IF EXISTS rebook;

CREATE DATABASE rebook;

-- use 'rebook' database
\c rebook;

-- add constraints to fields***
CREATE TABLE IF NOT EXISTS calendar (
  id SERIAL PRIMARY KEY,
  month smallint NOT NULL,
  day smallint NOT NULL,
  year smallint NOT NULL,
)

CREATE TABLE IF NOT EXISTS rooms (
  room_id SERIAL PRIMARY KEY,
  max_guest smallint NOT NULL,
  price smallint NOT NULL,
)

CREATE TABLE IF NOT EXISTS reservations (
  reservation_id SERIAL PRIMARY KEY,
  room_id smallint REFERENCES rooms(room_id),
  year smallint NOT NULL,
  month smallint NOT NULL,
  day smallint NOT NULL,
  guests smallint NOT NULL,

)
