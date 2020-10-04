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


    var s = <Month currentMonth = {this.props.currentMonth} changeDate = {this.props.changeDate} clickCounter = {this.clickCounter} counter = {this.state.counter}/>;
    var e = <Month currentMonth = {this.props.currentMonth + 1} changeDate = {this.props.changeDate} clickCounter = {this.clickCounter} counter = {this.state.counter}/>;

    return (
      <div id = 'popup'>

        <BaseForm from = {this.props.from} to = {this.props.to}/>

        <button onClick={()=>this.props.handleClick(-1)}>{'<'}</button><button onClick={()=>this.props.handleClick(1)}>{'>'}</button>
        <table>
          <td>{s}</td>
          <td>{e}</td>
        </table>
      </div>
    );

  }

}
export default Dates;