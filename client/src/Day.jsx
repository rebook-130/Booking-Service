import React from 'react';

class Day extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <td>
        <div>
          <div>{this.props.day}</div>
          <div>{this.props.data !== undefined ? this.props.data.price : 'none'}</div>
        </div>
      </td>
    );

  }

}


export default Day;