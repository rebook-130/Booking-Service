import React from 'react';
import $ from 'jquery';
import Dates from './Dates.jsx';
import Base from './Base.jsx';
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { count: 0, window: false, from: '10/11/2020', to: '11/10/2020', fromSet: false};

    this.calend = this.calend.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickReserve = this.handleClickReserve.bind(this);

    this.changeDate = this.changeDate.bind(this);
  }


  calend(date) {
    console.log(date + '<--------');

    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    var dayInMonth = new Date(year, month + 1, 0).getDate();

    var dayOfTheWeek = new Date(year, month, 1).getDay();
    console.log(dayOfTheWeek);

    var s = dayOfTheWeek;

    var j = 1;

    var monthFirst = document.createElement('table');
    monthFirst.className = monthNames[month];

    var m = document.createElement('div'); ////
    m.innerHTML = monthNames[month] + ' ' + year;
    console.log(document);
    document.getElementById('test').appendChild(m);
    document.getElementById('test').appendChild(monthFirst);

    for (var i = 1; i <= dayInMonth + s; i++) {

      if (i % 7 === 1) { var p = document.createElement('tr'); }

      var inDay = document.createElement('td');

      if (dayOfTheWeek + 1 !== 1) {
        dayOfTheWeek--;
        inDay.innerHTML = '';
      } else {


        (function (j, inDay) {
        // console.log(new Date(year, month, j));
          $.ajax({
            method: 'GET',
            url: '/api/calendar?date=' + new Date(year, month, j),
            success: result =>result.length !== 0 && result[0].booked ? inDay.innerHTML = j + '<br>' + result[0].price + '$' : inDay.innerHTML = '<span class="grey">' + j + '<br> none</span>'

          });

        })(j, inDay);


        //inDay.innerHTML = j;
        j++;

      } //here is suppose to be elemrnt

      p.appendChild(inDay);
      if (i % 7 === 1) { document.getElementsByClassName(monthNames[month])[0].appendChild(p); }

    }


    //document.getElementById('test').innerHTML = item;
    //document.getElementsByClassName('calendar')[0].innerHTML = itemQ;
    console.log(day, month, dayInMonth);

  }

  // componentDidMount() {

  //   var date = new Date();
  //   this.calend(date);
  //   var date = new Date(date.getFullYear(), date.getMonth() + 2, 0);
  //   this.calend(date);

  // }


  handleClick(value) {

    this.setState({count: this.state.count + value});

    // console.log(this.state.count);
    // this.setState({ count: this.state.count + value }, () => {


    //   document.getElementById('test').innerHTML = ''; //cleaning the form
    //   var date = new Date();
    //   console.log('here');
    //   this.calend(new Date(date.getFullYear(), date.getMonth() + this.state.count, 0 ));
    //   this.calend(new Date(date.getFullYear(), date.getMonth() + 1 + this.state.count, 0 ));

    // });

  }

  handleClickReserve() {
    if (this.state.window === false) {
      this.setState({window: this.state.window = true});
    } else {
      this.setState({window: this.state.window = false});
    }
  }

  changeDate(fromTo) {
    if (this.state.fromSet === false) { this.setState({from: fromTo, to: '--/--/--'}); this.setState({fromSet: true}); }
    if (this.state.fromSet === true) { this.setState({to: fromTo}); this.setState({fromSet: false}); }

  }

  render() {
    var popUp;
    if (this.state.window) { popUp = <Dates currentMonth = {this.state.count} changeDate = {this.changeDate} from = {this.state.from} to = {this.state.to} handleClick = {this.handleClick}/>; } else { popUp = 'pop-up window'; }

    return (
      <div>
        <div>Hello Calendar!</div>

        <div id="test"></div>

        <Base handleClickReserve = {this.handleClickReserve} from ={this.state.from} to = {this.state.to}/>

        <div>{popUp}</div>

      </div>
    );


  }

}


export default App;