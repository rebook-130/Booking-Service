const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const userMaker = () => {
  writer.pipe(fs.createWriteStream('postUser.csv'));
  for (var i = 0; i < 10000; i++) {
    writer.write(
      {
        user_name: `${faker.name.firstName()}${faker.name.lastName()}`,
        email: `${faker.internet.exampleEmail()}`,
      },
    );
  }
  writer.end();
  console.log('Toast is done');
};
userMaker();
