import $ from 'jquery';
import React from 'react';
import BaseForm from './BaseForm.jsx';

const axios = require('axios');

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.getAllCalendarInfo = this.getAllCalendarInfo.bind(this);
  }

  componentDidMount() {
    const el = document.querySelector('#button');
    el.addEventListener('mousemove', (e) => {
      el.style.setProperty('--x', -120 + e.offsetX + 'px');
      el.style.setProperty('--y', -30 + e.offsetY + 'px');
    });
    this.getAllCalendarInfo();
  }

  getAllCalendarInfo() {
    let date = new Date();
    const month = date.getMonth();
    const self = this;
    axios.get(`/api/calendar?month=${month}`)
      .then((response) => {
        self.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // console.log(this.props.from, this.props.to); //by using Data()
    return (
      <div id="base">
        <div>
          <div id='basePrice'>{this.state.data[0] ? <div>
            <span style={{ fontSize: '22px', color: 'black' }}>$ {this.state.data[0].price}</span>/night</div> : <div>loading...</div>}</div>
          <div id='baseRate'>
            <span style={{ color: 'red' }}> &#9733;</span>
            {this.state.data[0] ? this.state.data[0].rating : <div></div>}(12)</div>
        </div>
        <div id='baseFormWrapper'>
          <div id='baseFormHover'>
            <BaseForm from={this.props.from} to={this.props.to} handleClickReserve={this.props.handleClickReserve} />
          </div>
          <div id='guest'><b>GUESTS</b><span style={{ fontWeight: 300, fontSize: '17px' }}><br /> 2 guests </span>
          </div>
        </div>
        <button id='button' onClick={() => this.props.handleClickReserve()}>{'Reserve'}</button>
        <div id='messageAlert'>
          <span style={{ fontWeight: 300, fontSize: '14px' }}>You won't be charged yet</span>
        </div>
        <div id='elementList'>
          <div id='leftList'>{this.state.data[0] ? '$' + this.state.data[0].price + 'x' + (this.props.nights === 0 ? 1 : this.props.nights) : <div></div>}</div>
          <div id='rightList'>${this.state.data[0] ? this.state.data[0].price * (this.props.nights === 0 ? 1 : this.props.nights) : <div></div>}</div>
          </div>
        <div id='elementList'>
          <div id='leftList'>Cleaning Fee</div>
          <div id='rightList'>${this.state.data[0] ? this.state.data[0].cleaningFee : <div></div>}</div>
          </div>
        <div id='elementList'>
          <div id='leftList'>Service Fee</div>
          <div id='rightList'>${this.state.data[0] ? this.state.data[0].cleaningFee * (this.props.nights === 0 ? 1 : this.props.nights) : <div></div>}</div>
          </div>
        <div id='elementList'>
          <div id='leftList'>Occupancy taxes and fees</div>
          <div id='rightList'>${this.state.data[0] ? this.state.data[0].taxes : <div></div>}</div>
          </div>
        <div id='total'>
          <div id='leftListTotal'>Total</div>
          <div id='rightListTotal'>  ${this.state.data[0] ? this.state.data[0].taxes + this.state.data[0].cleaningFee + this.state.data[0].cleaningFee + (this.state.data[0].price * (this.props.nights === 0 ? 1 : this.props.nights)) : <div></div>} </div>
        </div>
      </div>
    );
  }
}

export default Base;
