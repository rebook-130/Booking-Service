DROP KEYSPACE IF EXISTS rebook;

CREATE KEYSPACE rebook WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };
use rebook;


CREATE TABLE IF NOT EXISTS rooms (
  room_id UUID NOT NULL,
  room_name VARCHAR(55) NOT NULL,
  room_location VARCHAR(55) NOT NULL,
  max_guest SMALLINT NOT NULL,
  price SMALLINT NOT NULL,
  PRIMARY KEY (room_id),
)

CREATE TABLE IF NOT EXISTS reservation_by_rooms (
  reservation_id UUID NOT NULL,
  room_id INT NOT NULL,
  check_in VARCHAR(10) NOT NULL,
  check_out VARCHAR(10) NOT NULL,
  guests SMALLINT NOT NULL,
  user_id INT NOT NULL,
  user_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  PRIMARY KEY (room_id, reservation_id),
)
