
var calend = function (date) {
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  var dayInMonth = new Date (year, month + 1, 0).getDate();

  var dayOfTheWeek = new Date(year, month, 1).getDay();
  console.log(dayOfTheWeek);

  var s = dayOfTheWeek;

  var j = 1;

  var monthFirst = document.createElement('table');
  monthFirst.className = monthNames[month];

  var m = document.createElement('div'); ////
  m.innerHTML = monthNames[month] + ' ' + year;

  document.getElementById('test').appendChild(m);
  document.getElementById('test').appendChild(monthFirst);

  for (var i = 1; i <= dayInMonth + s; i++) {

    if (i % 7 === 1) { var p = document.createElement('tr'); }

    var inDay = document.createElement('td');

    if (dayOfTheWeek + 1 !== 1) {
      dayOfTheWeek--;
      inDay.innerHTML = '';
    } else {

      inDay.innerHTML = j; j++;
    } //here is suppose to be elemrnt

    p.appendChild(inDay);
    if (i % 7 === 1) { document.getElementsByClassName(monthNames[month])[0].appendChild(p); }

  }


  //document.getElementById('test').innerHTML = item;
  //document.getElementsByClassName('calendar')[0].innerHTML = itemQ;
  console.log(day, month, dayInMonth);
};



var d = function() {

  var count = 0;

  return function(m) {
    if (m < 0) { count--; } else if (m > 0) { count++; }
    document.getElementById('test').innerHTML = '';


    //didMount
    if (m === undefined) {
      var date = new Date();
      calend(date);
      var date = new Date(date.getFullYear(), date.getMonth() + 2, 0 );
      calend(date);
      console.log('when no clicking', count, m);
    } else {

      //by clicking ---> setState
      console.log('here', count, m);
      var date = new Date();
      var date = new Date(date.getFullYear(), date.getMonth() + count, 0 );
      console.log(date.getFullYear(), date.getMonth() + count, 0 );
      calend(date);
      var date = new Date();
      var date = new Date(date.getFullYear(), date.getMonth() + 1 + count, 0 );
      calend(date);

    }
  };

};

var forward = d();

forward();

document.getElementById('app').innerHTML = '<button onclick="forward(-1)"> < </button><button onclick="forward(1)"> > </button>';