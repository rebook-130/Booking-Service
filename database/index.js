const mongoose = require('mongoose');

// Uncomment for localhost
mongoose.connect('mongodb://localhost/calendar');
// Uncomment for Proxy use
// mongoose.connect('mongodb://database/calendar');

const calendarSchema = mongoose.Schema({
  roomId: String,
  date: String,
  month: Number,
  day: Number,
  price: Number,
  maxGuest: Number,
  cleaningFee: Number,
  taxes: Number,
  rating: Number,
  booked: Boolean,
});

const Calendar = mongoose.model('Calendar', calendarSchema);

const save = (singleDate) => {
  // console.log(repos);
  // console.log(repos[0].name, repos[0].owner.login, repos[0].url, repos[0].watchers_count, repos[0].forks_count);

  const add = new Calendar({
    roomId: singleDate.roomId,
    date: singleDate.date,
    month: singleDate.month,
    day: singleDate.day,
    price: singleDate.price,
    maxGuest: singleDate.maxGuest,
    cleaningFee: singleDate.cleaningFee,
    taxes: singleDate.taxes,
    rating: singleDate.rating,
    booked: singleDate.booked,
  });

  add.save((err) => {
    console.log(err);
    // Calendar.deleteMany({}, (err)=>{console.log(err)});  // <- here the wa to clean the data base
    // Calendar.find({}).exec((err,result)=>{ console.log(result) })
  });
};

const postThis = (document) => {
  Calendar.insert(document);
};

const get = (roomId, month, cb) => {
  // How should I get the month before and the month after ?
  // I need to get 3 months worth of data
  Calendar.find({ 'roomId': roomId, 'month': month}).exec((err, result) => { cb(err, result); });
  // Calendar.find({ 'roomId': roomId, 'date': date}).exec((err, result) => { cb(err, result); });
};

const deleteAll = () => {
  Calendar.deleteMany({}, (err) => { console.log(err); }); // <- here the wa to clean the data base
};

module.exports.save = save;
module.exports.get = get;
module.exports.delete = deleteAll;
module.exports.postThis = postThis;
