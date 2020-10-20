const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const faker = require('faker');

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const roomMaker = (start, end) => {
  const rooms = [];
  for (let i = start; i <= end; i += 1) {
    const room = {
      room_name: `'${faker.random.word()} ${faker.vehicle.color()}'`,
      room_location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}`,
      max_guest: randomInt(2, 5),
      price: randomInt(170, 340),
    };
    rooms.push(room);
  }
  return rooms;
};

const csvWriter = createCsvWriter({
  path: './post_room.csv',
  header: [
    { id: 'room_name', title: 'ROOMNAME' },
    { id: 'room_location', title: 'ROOMLOCATION' },
    { id: 'max_guest', title: 'MAXGUEST' },
    { id: 'price', title: 'PRICE' },
  ],
});

// const records = [
//   { name: 'Bob', lang: 'French, English' },
//   { name: 'Mary', lang: 'English' },
// ];
// returns a promise
const listDump = roomMaker(1, 1000000);

csvWriter.writeRecords(listDump)
  .then(() => {
    console.log('...Done');
  });
