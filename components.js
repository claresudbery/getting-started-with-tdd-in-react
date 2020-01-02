import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

export class MyCalendar extends Component {
  render() {
	  //const myEventsList = Array(9).fill("event");
	  const myDate = new Date();
	  myDate.setFullYear(2017, 9, 19);	  
	  
	  const myDate2 = new Date();
	  myDate2.setFullYear(2017, 9, 21);
	  
	  const myEventsList = [
		{ title: 'Event 01', allday: true, startDate: myDate, endDate: myDate2 },
		{ title: 'Event 02', allday: true, startDate: myDate, endDate: myDate2 },
		{ title: 'Event 03', allday: true, startDate: myDate, endDate: myDate2 } ];
	  
    return (
		<div>
			<BigCalendar
			  events={myEventsList}
			  startAccessor='startDate'
			  endAccessor='endDate'
			/>
		</div>
    );
  }
}

export class BeerListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(name) {
    this.setState({
      beers: [].concat(this.state.beers).concat([name])
    });
  }

  render() {
    return (
      <div>
        <InputArea onSubmit={this.addItem}/>
        <BeerList items={this.state.beers}/>
      </div>
    );
  }
}

export class InputArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.setText = this.setText.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setText(event) {
    this.setState({text: event.target.value});
  }

  handleClick() {
    this.props.onSubmit(this.state.text);
  }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.setText}/>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export class BeerList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}
BeerList.defaultProps = { items: [] };
