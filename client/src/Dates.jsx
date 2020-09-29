import React from 'react';
import Month from './Month.jsx';
class Dates extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>
        <Month currentMonth = {this.props.currentMonth}/>
        <Month currentMonth = {this.props.currentMonth + 1}/>
      </div>
    );

  }

}
export default Dates;