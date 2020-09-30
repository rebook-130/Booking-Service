import React from 'react';
import Month from './Month.jsx';
class Dates extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>
        <table>
          <td><Month currentMonth = {this.props.currentMonth}/></td>
          <td><Month currentMonth = {this.props.currentMonth + 1}/></td>
        </table>
      </div>
    );

  }

}
export default Dates;