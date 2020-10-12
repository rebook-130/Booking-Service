import React from 'react';
import $ from 'jquery';
class Day extends React.Component {

  constructor(props) {
    super(props);

    this.state = {toggle: 0, from: '',
      bgColor: 'white', bgColorT: 'black', id: undefined};

    this.sendDayFrom = this.sendDayFrom.bind(this);
    this.boxClick = this.boxClick.bind(this);

  }



  sendDayFrom() {

    var options = { month: 'numeric', day: 'numeric', year: 'numeric' };
    console.log(this.props.data.date, '<--this.props.data.date from Day');

    var r = new Date(this.props.data.date);
    console.log(r, '<---r');
    //toLocaleDateString('en-US', {year: '2-digit', month: '2-digit', day: '2-digit'});
    var yyyy = r.getFullYear() + '';
    var yy = yyyy.slice(2);
    var mm = r.getMonth() < 9 ? '0' + (r.getMonth() + 1) : (r.getMonth() + 1); // getMonth() is zero-based
    var dd = r.getDate() < 10 ? '0' + r.getDate() : r.getDate();

    console.log('---->');
    console.log(dd);
    console.log(mm);
    console.log(yy);


    var h = ''.concat(mm).concat('/').concat(dd).concat('/').concat(yy);


    console.log(h, '<--- Date from Day.js');
    this.props.changeDate(h);


    //toggle if once was clicked set second date
  }

  boxClick() {
    this.props.clickCounter(1);
    console.log(this.props.counter);
    if (this.state.bgColor === 'white' && this.props.counter <= 2) {
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
      this.props.overClicked();

      this.sendDayFrom();
      this.setState({
        bgColor: 'black',
        bgColorT: 'white',
        id: this.props.data._id
      });

    }

  }


  componentDidMount() {
    if (this.props.selected) {
      console.log(this.props.selected);
      this.setState({bgColor: 'black', bgColorT: 'white'});
    }
  }



  componentDidUpdate(prevProps, prevState) {

    // if (this.props.data !== undefined && prevProps.data !== undefined) {
    //   if (this.props.data._id !== prevProps.data._id && this.props.selected !== true) {
    //     this.setState({bgColor: 'white', bgColorT: 'black'});
    //   }
    // }



    if (this.props.selected !== undefined && prevProps.selected !== undefined) {
      if (this.props.selected !== prevProps.selected) {

        if (this.props.selected === true) {
          console.log(this.props.selected);
          this.setState({bgColor: 'black', bgColorT: 'white'});
        } else { this.setState({bgColor: 'white', bgColorT: 'black'}); }
      }
    }
  }




  render() {
    //var c;
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