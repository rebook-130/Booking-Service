const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: './post.csv',
  header: [
    { id: 'name', title: 'NAME' },
    { id: 'lang', title: 'LANGUAGE' },
  ],
});

const records = [
  { name: 'Bob', lang: 'French, English' },
  { name: 'Mary', lang: 'English' },
];
  // returns a promise
csvWriter.writeRecords(records)
  .then(() => {
    console.log('...Done');
  });
