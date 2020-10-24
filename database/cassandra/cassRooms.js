const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const roomMaker = () => {
  writer.pipe(fs.createWriteStream('cassRooms.csv'));
  for (var i = 0; i < 10000000; i++) {
    writer.write(
      {
        room_id: `${i}`,
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