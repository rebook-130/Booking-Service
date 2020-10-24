DROP KEYSPACE IF EXISTS rebook;

CREATE KEYSPACE rebook WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };
use rebook;


CREATE TABLE IF NOT EXISTS rooms (
  room_id INT,
  room_name TEXT,
  room_location TEXT,
  max_guest SMALLINT,
  price SMALLINT,
  PRIMARY KEY (room_id),
);

COPY rebook.rooms  (room_id, room_name, room_location, max_guest, price) FROM '/Users/ufo/dev/SDC/booking-service/database/cassandra/cassRooms.csv' WITH DELIMITER=',' AND HEADER=TRUE;

CREATE TABLE IF NOT EXISTS reservations_by_room (
  reservation_id INT,
  room_id INT,
  check_in TEXT,
  check_out TEXT,
  guests SMALLINT,
  user_id INT,
  user_name TEXT,
  email TEXT,
  PRIMARY KEY (room_id, reservation_id),
);


COPY rebook.reservations_by_room  (reservation_id, room_id, check_in, check_out, guests, user_id, user_name, email)
FROM '/Users/ufo/dev/SDC/booking-service/database/cassandra/cassReservations.csv'  WITH DELIMITER=',' AND HEADER=TRUE;