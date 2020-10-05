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

    if (this.props.from !== undefined) {
      var selectedMonthFrom = this.props.from.match(/^(\d\d)\//);
      var selectedDayFrom = this.props.from.match(/\/(\d\d)\//);
      if (selectedMonthFrom !== null && selectedDayFrom !== null) {
        var monthFrom = selectedMonthFrom[1];
        var dayFrom = selectedDayFrom[1];
        console.log(monthFrom, dayFrom);
      }
    }


    if (this.props.to !== undefined) {
      var selectedMonthTo = this.props.to.match(/^(\d\d)\//);
      var selectedDayTo = this.props.to.match(/\/(\d\d)\//);
      if (selectedMonthTo !== null && selectedDayTo !== null) {
        var monthTo = selectedMonthTo[1];
        var dayTo = selectedDayTo[1];
        console.log(monthTo, dayTo);
      }
    }


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
        var selected = false;
        dayOfTheWeek--;
        days.push(<Day/>);
      } else {
        var data = this.state.data.filter(x=> x.day === j);

        var selected = false;
        console.log(month + 1, monthFrom, j, dayFrom);
        if ((month + 1 === parseInt(monthFrom) && j === parseInt(dayFrom)) || (month + 1 === parseInt(monthTo) && j === parseInt(dayTo))) { console.log('was selected'); selected = true; }

        days.push(<Day day = {j} data = {data[0]} changeDate = {this.props.changeDate} clickCounter = {this.props.clickCounter} counter = {this.props.counter} selected = {selected}/>);
        j++;
      }


      if (i % 7 === 0 || i === dayInMonth + s) { daysM.push(<tr>{days}</tr>); days = []; }

    }


    return (

      <div>
        {/* <div> {monthNames[month % 12]}</div> */}
        <table id = 'dayWeek'><td> Su</td><td> Mo</td><td> Tu </td><td>We</td><td> Th</td><td> Fr</td><td> Sa</td></table>

        <table id = 'M'>
          <tbody>
            {daysM}
          </tbody>
        </table>
      </div>
    );

  }

}


export default Month;