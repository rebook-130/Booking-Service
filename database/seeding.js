const db = require('./index.js');

//for next 3 month generate price

// roomId: x.roomId,
// date: x.date,
// month: x.month
// price: x.price,
// maxGuest: x.maxGuest,
// cleaningFee: x.cleaningFee,
// taxes: x.taxes,
// rating: x.rating


// [
// {roomId: 1,date: 09-01-2020,price: 150,maxGuest: 3,cleaningFee: 100,taxes: 30,rating: 4.7},
// {roomId: 1,date: 09-02-2020,price: 150,maxGuest: 3,cleaningFee: 100,taxes: 30,rating: 4.7},
// {roomId: 1,date: 09-03-2020,price: 160,maxGuest: 3,cleaningFee: 100,taxes: 30,rating: 4.7},...
// {roomId: 2,date: 01-01-2020,price: 220,maxGuest: 3,cleaningFee: 100,taxes: 30,rating: 3.5},...
// {roomId: 3,date: 01-01-2020,price: 180,maxGuest: 3,cleaningFee: 100,taxes: 30,rating: 5.0},...
//  ]


var dayAmount = 90;

//09-09-2020

//
db.delete();

for (var j = 1; j <= 5; j++) {
  for (var i = 0; i < dayAmount; i++) {
    //Date.UTC(2020, 0, 9, 14, 0, 0)
    //var m = new Date(2020, 9, i);
    var m = new Date(Date.UTC(2020, 9, i, 14, 0, 0));
    console.log(m);
    eachSingleDate = {};
    eachSingleDate.roomId = j; //j
    eachSingleDate.date = m;
    eachSingleDate.month = m.getMonth();
    eachSingleDate.day = m.getDate();
    eachSingleDate.price = 100 + Math.floor(Math.random() * 100);
    eachSingleDate.maxGuest = 3;
    eachSingleDate.cleaningFee = 40;
    eachSingleDate.taxes = 50; //or calculete the tax basing on the price
    eachSingleDate.rating = 4;
    eachSingleDate.booked = Math.random() < 0.8 ? true : false;

    db.save(eachSingleDate);
  }
}

//
//db.get('123', (err, result)=> console.log(result));
