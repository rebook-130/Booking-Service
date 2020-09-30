import React from 'react';
import Month from './Month.jsx';
class BaseForm extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {

    return (
      <div>
        <div id = 'baseForm' onClick={()=>this.props.handleClickReserve()}> <div> <b>Check-in</b> {this.props.from}</div>
          <div> <b>Checkout</b> {this.props.to}</div>
        </div>
      </div>
    );

  }

}


export default BaseForm;