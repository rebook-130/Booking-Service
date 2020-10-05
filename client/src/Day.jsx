import React from 'react';
import $ from 'jquery';
class Day extends React.Component {

  constructor(props) {
    super(props);

    this.state = {toggle: 0, from: '',
      bgColor: 'white', bgColorT: '', id: undefined};

    this.sendDayFrom = this.sendDayFrom.bind(this);
    this.boxClick = this.boxClick.bind(this);

  }



  sendDayFrom() {

    var options = { month: 'numeric', day: 'numeric', year: 'numeric' };
    var r = new Date(this.props.data.date).toLocaleDateString(undefined, options);
    console.log(r);
    this.props.changeDate(r);


    //toggle if once was clicked set second date
  }

  boxClick() {
    this.props.clickCounter(1);
    console.log(this.props.counter);
    if (this.state.bgColor === 'white' && this.props.counter <= 1) {
      this.sendDayFrom();
      this.setState({
        bgColor: 'black',
        bgColorT: 'white',
        id: this.props.data._id
      });
    } else {
      this.setState({
        bgColor: 'white',
        bgColorT: 'black',
        id: this.props.data._id

      });
    }

    if (this.props.counter === 2) {

      this.props.clickCounter(0);
    }

  }


  componentDidUpdate(prevProps) {
    if (this.props.data !== undefined && prevProps.data !== undefined) {
      if (this.props.data._id !== prevProps.data._id) {
        this.setState({bgColor: 'white', bgColorT: 'black'});
      }
    }

  }



  render() {
    var c;
    var dat = [];
    if (this.props.data !== undefined && this.props.data.booked) {
      dat.push(
        <div id = "day" style={{backgroundColor: this.state.bgColor, color: this.state.bgColorT}} onClick={()=> { this.boxClick(); } } >
          <div id = "availiable">
            <div id = 'thisDay'>{this.props.day}</div>
            <div id ="price">{this.props.data !== undefined ? this.props.data.price + '$' : ''}</div>
          </div>
        </div>
      );


    } else {
      dat.push(
        <div id = "dayN" >
          <div id = "unavailible">
            <div>{this.props.day}</div>
            <div id ="price">{this.props.data !== undefined ? this.props.data.price + '$' : ''}</div>
          </div>
        </div>
      );
    }




    return (
      <td>



        {dat}



      </td>
    );

  }

}


export default Day;