const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const faker = require('faker');

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const reservationMaker = (start, end) => {
  const reservations = [];
  for (let i = start; i <= end; i += 1) {
    const reservation = {
      room_id: `'${faker.random.word()} ${faker.vehicle.color()}'`,
      room_location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}`,
      max_guest: randomInt(2, 5),
      price: randomInt(170, 340),
    };
    reservations.push(reservation);
  }
  return reservations;
};

const csvWriter = createCsvWriter({
  path: './post_reservation.csv',
  header: [
    { id: 'room_id', title: 'ROOMID' },
    { id: 'user_id', title: 'USERID' },
    { id: 'check_in', title: 'CHECKIN' },
    { id: 'check_out', title: 'CHECKOUT' },
    { id: 'guests', title: 'GUESTS' },
  ],
});

// const records = [
//   { name: 'Bob', lang: 'French, English' },
//   { name: 'Mary', lang: 'English' },
// ];
// returns a promise
const listDump = reservationMaker(1, 250000);

csvWriter.writeRecords(listDump)
  .then(() => {
    console.log('...Done');
  });
