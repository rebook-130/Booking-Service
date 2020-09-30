import React from 'react';
import Month from './Month.jsx';
import BaseForm from './BaseForm.jsx';
class Dates extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div id = 'popup'>

        <BaseForm from = {this.props.from} to = {this.props.to}/>

        <button onClick={()=>this.props.handleClick(-1)}>{'<'}</button><button onClick={()=>this.props.handleClick(1)}>{'>'}</button>
        <table>
          <td><Month currentMonth = {this.props.currentMonth} changeDate = {this.props.changeDate}/></td>
          <td><Month currentMonth = {this.props.currentMonth + 1} changeDate = {this.props.changeDate}/></td>
        </table>
      </div>
    );

  }

}
export default Dates;