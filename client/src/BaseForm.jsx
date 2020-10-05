import React from 'react';
import Month from './Month.jsx';
class BaseForm extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {
    if (this.props.handleClickReserve !== undefined) { var x = this.props.handleClickReserve; } else { var x = () => { console.log('here'); }; }

    return (
      <div>
        <div id = 'baseForm' onClick={()=>x()}>

          <div id = 'checkIn'> <b>CHECK-IN</b> <span style = {{fontWeight: 300, fontSize: '17px'}}><br />  {this.props.from}</span> </div>
          <div id = 'checkOut'> <b>CHECKOUT</b><span style = {{fontWeight: 300, fontSize: '17px'}}><br /> {this.props.to}</span></div>



        </div>
      </div>
    );

  }

}


export default BaseForm;