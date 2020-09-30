import React from 'react';
import $ from 'jquery';
class Day extends React.Component {

  constructor(props) {
    super(props);

    this.state = {toggle: 0, from: ''};

    this.sendDayFrom = this.sendDayFrom.bind(this);
  }


  sendDayFrom() {

    var options = { month: 'numeric', day: 'numeric', year: 'numeric' };
    var r = new Date(this.props.data.date).toLocaleDateString(undefined, options);
    console.log(r);
    this.props.changeDate(r);




    //toggle if once was clicked set second date
  }

  render() {
    var c;
    var dat = [];
    if (this.props.data !== undefined && this.props.data.booked) {

      dat.push(<div id = "availible">
        <div>{this.props.day}</div>
        <div id ="price">{this.props.data !== undefined ? this.props.data.price + '$' : ''}</div>
      </div>);


    } else {
      dat.push(<div id = "unavailible">
        <div>{this.props.day}</div>
        <div id ="price">{this.props.data !== undefined ? this.props.data.price + '$' : ''}</div>
      </div>);
    }




    return (
      <td>
        <div id = "day" onClick={()=>this.sendDayFrom()} >
          {dat}
        </div>
      </td>
    );

  }

}


export default Day;