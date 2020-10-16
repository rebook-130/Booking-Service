import React from 'react';
import Month from './Month.jsx';
import BaseForm from './BaseForm.jsx';
class Dates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {counter: 0, overClicked: false};

    this.clickCounter = this.clickCounter.bind(this);
    this.overClicked = this.overClicked.bind(this);
  }
  clickCounter(n) {
    this.setState({counter: this.state.counter + n});
    if (n === 0) { this.setState({counter: 0}); }
  }

  overClicked() {
    this.props.changeDate('--/--/----');
    this.props.changeDate('--/--/----');
    this.setState({overClicked: true});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.overClicked !== prevState.overClicked) {
      this.setState({overClicked: false});
    }
  }

  render() {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    var date = new Date();
    //console.log(date, '<--- Date from Dates.js');
    var month = date.getMonth() + this.props.currentMonth;

    var dateYear1 = new Date(date.getFullYear(), month + 1, 0);
    //console.log(dateYear1, '<--- Date from Base.js dateYear1');
    var dateYear2 = new Date(date.getFullYear(), month + 2, 0);
    //console.log(dateYear2, '<--- Date from Base.js dateYear1');
    return (
      <div id = 'popup'>
        <div id = 'header'>
          <div id = 'dates'>
            <div id = 'baseFormWrapperDates'>

              <div id = 'baseFormHover'>

                <BaseForm from = {this.props.from} to = {this.props.to}/>
              </div>


            </div>

          </div>
          <div id = 'nights'>{this.props.nights === 0 ? 'Select dates' : this.props.nights + ' nights' }</div>
        </div>

        <div id ='monthLine'>
          <button id = 'buttonSwipe' onClick={()=>this.props.handleClick(-1)}>{'<'}</button>

          <div id = 'monthLeft'>{monthNames[month % 12] + '  ' + dateYear1.getFullYear()}</div>

          <div id = 'monthRight'>{monthNames[(month + 1) % 12] + '  ' + dateYear2.getFullYear() }</div>

          <button id = 'buttonSwipe' onClick={()=>this.props.handleClick(1)}>{'>'}</button>
        </div>

        <div id = 'twoMonth'>

          <div id ="firstMonth"><Month currentMonth = {this.props.currentMonth} changeDate = {this.props.changeDate} clickCounter = {this.clickCounter} counter = {this.state.counter} from = {this.props.from} to = {this.props.to} overClicked = {this.overClicked}/></div>

          <div id ="secondMonth"><Month currentMonth = {this.props.currentMonth + 1} changeDate = {this.props.changeDate} clickCounter = {this.clickCounter} counter = {this.state.counter} from = {this.props.from} to = {this.props.to} overClicked = {this.overClicked}/></div>

        </div>

        <button id = 'closeButton' onClick = {()=>this.props.hideClickReserve()}>Close</button>

      </div>
    );

  }

}
export default Dates;