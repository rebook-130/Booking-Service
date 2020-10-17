DROP KEYSPACE IF EXISTS rebook;

CREATE KEYSPACE rebook WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };
use rebook;


CREATE TABLE IF NOT EXISTS rooms (
  room_id SMALLSERIAL NOT NULL,
  room_name VARCHAR(55) NOT NULL,
  room_location VARCHAR(55) NOT NULL,
  max_guest SMALLINT NOT NULL,
  price SMALLINT NOT NULL,
  PRIMARY KEY (room_id),
)

CREATE TABLE IF NOT EXISTS reservation_by_rooms (
  reservation_id SMALLSERIAL NOT NULL,
  room_id SMALLINT NOT NULL,
  check_in VARCHAR(10) NOT NULL,
  check_out VARCHAR(10) NOT NULL,
  guests SMALLINT NOT NULL,
  reservation_name STRING NOT NULL,
  email VARCHAR(50) NOT NULL,
  userid VARCHAR(50) primary key NOT NULL,
  PRIMARY KEY (room_id, reservation_id),
)
