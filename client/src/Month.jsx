import React from 'react';
import Day from './Day.jsx';
import $ from 'jquery';
class Month extends React.Component {

  constructor(props) {
    super(props);

    this.state = { data: []}; //here we need data for whole month (each day of month)

    this.byClicking = this.byClicking.bind(this);
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

  byClicking() {

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
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + this.props.currentMonth;

    var year = date.getFullYear();
    var dayInMonth = new Date(year, month + 1, 0).getDate();
    var dayOfTheWeek = new Date(year, month, 1).getDay();
    var s = dayOfTheWeek;

    var days = [];
    var daysM = [];
    var j = 1;
    for (var i = 1; i <= dayInMonth + s; i++) {

      if (dayOfTheWeek + 1 !== 1) {
        dayOfTheWeek--;
        days.push(<Day day = {'X'}/>);
      } else {
        var data = this.state.data.filter(x=> x.day === j);
        days.push(<Day day = {j} data = {data[0]}/>);
        j++;
      }


      if (i % 7 === 0 || i === dayInMonth + s) { daysM.push(<tr>{days}</tr>); days = []; }

    }

    return (
      <table class = 'M'>

        <tbody>
          <tr>{daysM}</tr>

        </tbody>
      </table>
    );

  }

}


export default Month;