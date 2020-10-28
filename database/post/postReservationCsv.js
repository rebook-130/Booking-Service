const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

// https://day.js.org/docs/en/manipulate/add

const reservationMaker = () => {
  writer.pipe(fs.createWriteStream('reservations_3`.csv'));
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
  // const day = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  // const inDay = randomInt(1, 15);
  // const outDay = randomInt(16, 31);

  // const year = 2021;
  // let count = 1;
  // let roomCount = 1;
  for (let i = 1; i < 10000001; i += 1) {
    if (i % 2 === 0) {
      writer.write(
        {
          room_id: `${i}`,
          user_id: `${i}`,
          check_in: faker.date.between('2020-11-01', '2021-01-01'),
          check_out: faker.date.between('2021-03-01', '2021-06-01'),
          guests: randomInt(1, 5),
        },
      );
    }
    // count += 1;
    // if (count === 3) {
    //   roomCount += 1;
    //   count = 1;
    // }
  }
  writer.end();
  console.log('Toast is done');
};
reservationMaker();
