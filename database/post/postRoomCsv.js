const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const roomMaker = () => {
  writer.pipe(fs.createWriteStream('postRoom.csv'));
  for (var i = 0; i < 10000000; i++) {
    writer.write(
      {
      // Add double quotes to room name and location
        room_name: `${faker.random.word()} ${faker.vehicle.color()}`,
        room_location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}`,
        max_guest: randomInt(2, 5),
        price: randomInt(170, 340),
      },
    );
  }
  writer.end();
  console.log('Toast is done');
};
roomMaker();

// const roomMaker = (start, end) => {
//   writer.pipe(fs.createWriteStream('postRoom.csv'));
//   const rooms = [];
//   for (let i = start; i <= end; i += 1) {
//     const room = {
//       // Add double quotes to room name and location
//       room_name: `'${faker.random.word()} ${faker.vehicle.color()}'`,
//       room_location: `${faker.address.streetAddress()}, ${faker.address.city()},
//            ${faker.address.state()}, ${faker.address.zipCode()}`,
//       max_guest: randomInt(2, 5),
//       price: randomInt(170, 340),
//     };
//     rooms.push(room);
//   }
//   return rooms;
// };

// const csvWriter = createCsvWriter({
//   path: './postRoom.csv',
//   header: [
//     { id: 'room_name', title: 'ROOMNAME' },
//     { id: 'room_location', title: 'ROOMLOCATION' },
//     { id: 'max_guest', title: 'MAXGUEST' },
//     { id: 'price', title: 'PRICE' },
//   ],
// });

// // returns a promise
// const listDump = roomMaker(0, 10000000);

// csvWriter.writeRecords(listDump)
//   .then(() => {
//     console.log('...Toast is done');
//   });
