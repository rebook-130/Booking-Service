const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
};




// const csvWriter = createCsvWriter({
//   path: './post.csv',
//   header: [
//     { id: 'name', title: 'NAME' },
//     { id: 'lang', title: 'LANGUAGE' },
//   ],
// });

// const records = [
//   { name: 'Bob', lang: 'French, English' },
//   { name: 'Mary', lang: 'English' },
// ];
//   // returns a promise
// csvWriter.writeRecords(records)
//   .then(() => {
//     console.log('...Done');
//   });
