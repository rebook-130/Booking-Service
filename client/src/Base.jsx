import React from 'react';
import BaseForm from './BaseForm.jsx';
import $ from 'jquery';
class Base extends React.Component {

  constructor(props) {
    super(props);

    this.state = {data: []};

  }

  componentDidMount() {
    var date = new Date();
    var month = date.getMonth();
    console.log(month);
    $.ajax({
      method: 'GET',
      url: '/api/calendar?month=' + month,
      success: result => this.setState({data: result})
    });

  }

  render() {

    console.log(this.props.from, this.props.to); //by using Data()
    return (
      <div id = "base">

        <div>
          <div id = 'basePrice'>{this.state.data[0] ? <div><span style = {{fontSize: '22px', color: 'black'}}>$ {this.state.data[0].price}</span>/night</div> : <div>loading...</div>}</div>
          <div id = 'baseRate'>3.10stars(HC)</div>
        </div>
        <BaseForm from = {this.props.from} to = {this.props.to}/>
        <div id = 'guest'> 1 guest(HC)</div>
        <button id = 'button' onClick={()=>this.props.handleClickReserve()}>{'Reserve'}</button>

        <div id = 'amountDays'>$60x3 $180 (HC)</div>
        <div id = 'cleaningFee'> Cleaning Fee $20(HC)</div>
        <div id = 'serviceFee'> Service Fee $30(HC)</div>
        <div id = 'occupancyFee'>Occupancy taxes and fees $30(HC)</div>

        <div id = 'total'>Total $300(HC) </div>
      </div>

    );
  }


}

export default Base;

