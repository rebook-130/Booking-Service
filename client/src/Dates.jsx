import React from 'react';
import Month from './Month.jsx';
import BaseForm from './BaseForm.jsx';
class Dates extends React.Component {

  constructor(props) {
    super(props);

    this.state = {counter: 0};

    this.clickCounter = this.clickCounter.bind(this);
  }


  clickCounter(n) {
    this.setState({counter: this.state.counter + n});
    if (n === 0) { this.setState({counter: 0}); }
  }


  render() {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    var date = new Date();
    var month = date.getMonth() + this.props.currentMonth;

    var dateYear1 = new Date(date.getFullYear(), month + 1, 0);
    var dateYear2 = new Date(date.getFullYear(), month + 2, 0);

    return (
      <div id = 'popup'>

        <div id = 'dates'>
          <div id = 'baseFormWrapperDates'>

            <div id = 'baseFormHover'>

              <BaseForm from = {this.props.from} to = {this.props.to}/>
            </div></div>
        </div>

        <div id ='monthLine'>
          <button id = 'buttonLeft' onClick={()=>this.props.handleClick(-1)}>{'<'}</button>

          <div id = 'monthLeft'>{monthNames[month % 12] + '  ' + dateYear1.getFullYear()}</div>

          <div id = 'monthRight'>{monthNames[(month + 1) % 12] + '  ' + dateYear2.getFullYear() }</div>

          <button id = 'buttonRight' onClick={()=>this.props.handleClick(1)}>{'>'}</button>
        </div>

        <table>
          <td><Month currentMonth = {this.props.currentMonth} changeDate = {this.props.changeDate} clickCounter = {this.clickCounter} counter = {this.state.counter}/></td>
          <td><Month currentMonth = {this.props.currentMonth + 1} changeDate = {this.props.changeDate} clickCounter = {this.clickCounter} counter = {this.state.counter}/></td>
        </table>
      </div>
    );

  }

}
export default Dates;