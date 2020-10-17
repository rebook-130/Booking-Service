DROP KEYSPACE IF EXISTS rebook;

CREATE KEYSPACE rebook WITH REPLICATION = { 'class' : 'NetworkTopologyStrategy', 'replication_factor' : 1 };
use rebook;

CREATE TABLE IF NOT EXISTS calendar (
  id SERIAL,
  month int,
  day int,
  year int,
  PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS rooms (
  room_id SERIAL,
  max_guest int,
  price int,
  PRIMARY KEY (room_id)
)

CREATE TABLE IF NOT EXISTS reservations (
  reservation_id SERIAL,
  room_id int,
  year int,
  month int,
  day int,
  guests int,
  PRIMARY KEY (reservation_id)
)
