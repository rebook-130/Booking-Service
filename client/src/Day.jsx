import React from 'react';
import $ from 'jquery';
class Day extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    var c;
    var dat = [];
    if (this.props.data !== undefined && this.props.data.booked) {

      dat.push(<div id = "availible">
        <div>{this.props.day}</div>
        <div>{this.props.data !== undefined ? this.props.data.price + '$' : ''}</div>
      </div>);


    } else {
      dat.push(<div id = "unavailible">
        <div>{this.props.day}</div>
        <div>{this.props.data !== undefined ? this.props.data.price + '$' : ''}</div>
      </div>);
    }




    return (
      <td>
        <div id = "day">
          {dat}
        </div>
      </td>
    );

  }

}


export default Day;