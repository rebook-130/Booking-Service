const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/calendar');

let calendarSchema = mongoose.Schema({

  roomId: String,
  date: String,
  month: Number,
  day: Number,
  price: Number,
  maxGuest: Number,
  cleaningFee: Number,
  taxes: Number,
  rating: Number,
  booked: Boolean
});

let Calendar = mongoose.model('Calendar', calendarSchema);

let save = (singleDate) => {
  //console.log(repos);
  //console.log(repos[0].name, repos[0].owner.login, repos[0].url, repos[0].watchers_count, repos[0].forks_count);



  var add = new Calendar({
    roomId: singleDate.roomId,
    date: singleDate.date,
    month: singleDate.month,
    day: singleDate.day,
    price: singleDate.price,
    maxGuest: singleDate.maxGuest,
    cleaningFee: singleDate.cleaningFee,
    taxes: singleDate.taxes,
    rating: singleDate.rating,
    booked: singleDate.booked
  });

  add.save((err) => {
    console.log(err);
    //Calendar.deleteMany({}, (err)=>{console.log(err)});  // <- here the wa to clean the data base
    // Calendar.find({}).exec((err,result)=>{ console.log(result) })
  });

};



let get = (roomId, month, cb) => {
  //Calendar.find({}).exec((err, result) => { cb(err, result); });
  console.log(roomId, month);
  Calendar.find({ 'roomId': roomId, 'month': month}).exec((err, result) => { cb(err, result); });
  // Calendar.find({ 'roomId': roomId, 'date': date}).exec((err, result) => { cb(err, result); });
};


let deleteAll = () => {
  Calendar.deleteMany({}, (err)=>{ console.log(err); }); // <- here the wa to clean the data base
};

module.exports.save = save;
module.exports.get = get;
module.exports.delete = deleteAll;