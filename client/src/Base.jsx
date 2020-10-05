import React from 'react';
import BaseForm from './BaseForm.jsx';
import $ from 'jquery';
class Base extends React.Component {

  constructor(props) {
    super(props);

    this.state = {data: []};

  }

  componentDidMount() {

    const el = document.querySelector('#button');
    el.addEventListener('mousemove', (e) => {
      el.style.setProperty('--x', -120 + e.offsetX + 'px');
      el.style.setProperty('--y', -30 + e.offsetY + 'px');
    });

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
          <div id = 'baseRate'><span style = {{color: 'red'}}> &#9733;</span>{this.state.data[0] ? this.state.data[0].rating : <div></div>}(12)</div>
        </div>

        <div id = 'baseFormWrapper'>

          <div id = 'baseFormHover'>
            <BaseForm from = {this.props.from} to = {this.props.to} handleClickReserve = {this.props.handleClickReserve}/>
          </div>


          <div id = 'guest'><b>GUESTS</b><span style = {{fontWeight: 300, fontSize: '17px'}}><br /> 2 guests </span>

          </div>

        </div>

        <button id = 'button' onClick={()=>this.props.handleClickReserve()}>{'Reserve'}</button>

        <div id = 'messageAlert'><span style = {{fontWeight: 300, fontSize: '14px'}}>You won't be charged yet</span></div>

        <div id = 'elementList'>
          <div id = 'leftList'>$60x3</div>
          <div id = 'rightList'>$180(HC)</div> </div>

        <div id = 'elementList'>
          <div id = 'leftList'>Cleaning Fee</div>
          <div id = 'rightList'>$20(HC)</div> </div>

        <div id = 'elementList'>
          <div id = 'leftList'>Service Fee</div>
          <div id = 'rightList'>$30(HC)</div> </div>

        <div id = 'elementList'>
          <div id = 'leftList'>Occupancy taxes and fees</div>
          <div id = 'rightList'>$30(HC)</div> </div>

        <div id = 'total'>
          <div id = 'leftListTotal'>Total</div>
          <div id = 'rightListTotal'>  $300(HC) </div>
        </div>
      </div>

    );
  }


}

export default Base;

