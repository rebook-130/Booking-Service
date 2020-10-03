import React from 'react';
import Day from './Day.jsx';
import $ from 'jquery';
class Month extends React.Component {

  constructor(props) {
    super(props);

    this.state = { data: []}; //here we need data for whole month (each day of month)

  }

  componentDidUpdate(prevProps) {

    if (this.props.currentMonth !== prevProps.currentMonth) {
      var date = new Date();
      var month = date.getMonth() + this.props.currentMonth;
      console.log(month);
      $.ajax({
        method: 'GET',
        url: '/api/calendar?month=' + month,
        success: result => this.setState({data: result})
      });
    }
  }


  componentDidMount() {

    var date = new Date();
    var month = date.getMonth() + this.props.currentMonth;
    console.log(month);
    $.ajax({
      method: 'GET',
      url: '/api/calendar?month=' + month,
      success: result => this.setState({data: result})
    });

  }




  render() {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + this.props.currentMonth;

    var year = date.getFullYear();
    var dayInMonth = new Date(year, month + 1, 0).getDate();
    var dayOfTheWeek = new Date(year, month, 1).getDay();
    var s = dayOfTheWeek;
    var x = 0;
    var days = [];
    var daysM = [];
    var j = 1;
    for (var i = 1; i <= dayInMonth + s; i++) {

      if (dayOfTheWeek + 1 !== 1) {
        dayOfTheWeek--;
        days.push(<Day/>);
      } else {
        var data = this.state.data.filter(x=> x.day === j);
        days.push(<Day day = {j} data = {data[0]} changeDate = {this.props.changeDate} clickCounter = {this.props.clickCounter} counter = {this.props.counter}/>);
        j++;
      }


      if (i % 7 === 0 || i === dayInMonth + s) { daysM.push(<tr>{days}</tr>); days = []; }

    }


    return (

      <div>
        <div> {monthNames[month % 12]}</div>
        <table class = 'M'>
          <tbody>
            {daysM}
          </tbody>
        </table>
      </div>
    );

  }

}


export default Month;