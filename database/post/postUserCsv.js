const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const faker = require('faker');

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const userMake = (start, end) => {
  const users = [];
  for (let i = start; i <= end; i += 1) {
    const user = {
      user_name: `'${faker.name.firstName()} ${faker.name.lastName()}'`,
      email: faker.internet.email(),
    };
    users.push(user);
  }
  return users;
};

const csvWriter = createCsvWriter({
  path: './post_user.csv',
  header: [
    { id: 'user_name', title: 'USERNAME' },
    { id: 'email', title: 'EMAIL' },

  ],
});

// const records = [
//   { name: 'Bob', lang: 'French, English' },
//   { name: 'Mary', lang: 'English' },
// ];
// returns a promise
const listDump = userMake(1, 10);

csvWriter.writeRecords(listDump)
  .then(() => {
    console.log('...Done');
  });
