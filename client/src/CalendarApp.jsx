import React from 'react';
import $ from 'jquery';
import Dates from './Dates.jsx';
import Base from './Base.jsx';
class CalendarApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = { count: 0, window: false, from: '--/--/----', to: '--/--/----', fromSet: false, nights: 0};

    this.handleClick = this.handleClick.bind(this);
    this.handleClickReserve = this.handleClickReserve.bind(this);

    this.changeDate = this.changeDate.bind(this);
    this.hideClickReserve = this.hideClickReserve.bind(this);
    this.countNights = this.countNights.bind(this);
  }




  // componentDidMount() {

  //   var date = new Date();
  //   this.calend(date);
  //   var date = new Date(date.getFullYear(), date.getMonth() + 2, 0);
  //   this.calend(date);

  // }


  handleClick(value) {
    this.setState({count: this.state.count + value});
  }

  handleClickReserve() {
    if (this.state.window === false) {
      this.setState({window: this.state.window = true});
    } else {
      this.setState({window: this.state.window = false});
    }
  }

  hideClickReserve() {
    if (this.state.window === true) {
      this.setState({window: this.state.window = false});
    }
  }

  changeDate(fromTo) {
    if (this.state.fromSet === false) { this.setState({from: fromTo, to: '--/--/----'}); this.setState({fromSet: true}); }
    if (this.state.fromSet === true) {

      //we have compare our dates here and 'from' grather than 'to' switch them if(this.state.from < fromTo){this.setState({to: this.state.from, })}

      this.setState({to: fromTo});
      this.setState({fromSet: false});
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.from !== prevState.from) {
      if ((this.state.from !== '--/--/----') && (this.state.to !== '--/--/----')) { this.countNights(); } else { this.setState({nights: 0}); }
    }

    if (this.state.to !== prevState.to) {
      if ((this.state.from !== '--/--/----') && (this.state.to !== '--/--/----')) { this.countNights(); } else { this.setState({nights: 0}); }
    }

  }

  countNights() {


    var selectedMonthFrom = this.state.from.match(/^(\d\d)\//);
    var selectedDayFrom = this.state.from.match(/\/(\d\d)\//);

    var selectedMonthTo = this.state.to.match(/^(\d\d)\//);
    var selectedDayTo = this.state.to.match(/\/(\d\d)\//);

    var count = selectedDayTo[1] - selectedDayFrom[1];


    //have to fix this snippet because not every month contains 31 day
    console.log(selectedMonthTo[1], selectedMonthFrom[1]);
    if (selectedMonthTo[1] - selectedMonthFrom[1] !== 0) {
      count = 31 - parseInt(selectedDayFrom[1]) + parseInt((selectedMonthTo[1] - selectedMonthFrom[1] - 1) * 31) + parseInt(selectedDayTo[1]);
    }

    console.log(selectedDayTo, selectedDayFrom);
    this.setState({nights: count});



  }

  render() {
    var popUp;

    if (this.state.window) {
      popUp = <Dates currentMonth = {this.state.count}
        changeDate = {this.changeDate} from = {this.state.from} to = {this.
          state.to} handleClick = {this.handleClick} hideClickReserve = {this.handleClickReserve} nights = {this.state.nights}/>;
    } else { popUp = ''; }



    return (
      <div>


        <div id="test"></div>

        <Base handleClickReserve = {this.handleClickReserve} from ={this.state.from} to = {this.state.to} nights = {this.state.nights}/>

        <div>{popUp}</div>

      </div>
    );


  }

}


export default CalendarApp;