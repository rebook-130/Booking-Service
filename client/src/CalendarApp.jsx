import React from 'react';
import $ from 'jquery';
import Dates from './Dates.jsx';
import Base from './Base.jsx';
class CalendarApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = { count: 0, window: false, from: '--/--/----', to: '--/--/----', fromSet: false};

    this.handleClick = this.handleClick.bind(this);
    this.handleClickReserve = this.handleClickReserve.bind(this);

    this.changeDate = this.changeDate.bind(this);
    this.hideClickReserve = this.hideClickReserve.bind(this);
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
    if (this.state.fromSet === false) { this.setState({from: fromTo, to: '--/--/--'}); this.setState({fromSet: true}); }
    if (this.state.fromSet === true) { this.setState({to: fromTo}); this.setState({fromSet: false}); }

  }

  render() {
    var popUp;

    if (this.state.window) {
      popUp = <Dates currentMonth = {this.state.count}
        changeDate = {this.changeDate} from = {this.state.from} to = {this.
          state.to} handleClick = {this.handleClick} hideClickReserve = {this.handleClickReserve}/>;
    } else { popUp = ''; }



    return (
      <div>


        <div id="test"></div>

        <Base handleClickReserve = {this.handleClickReserve} from ={this.state.from} to = {this.state.to}/>

        <div>{popUp}</div>

      </div>
    );


  }

}


export default CalendarApp;