import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BeerListContainer} from './components';
import {MyCalendar} from './components';
import './node_modules/react-big-calendar/lib/css/react-big-calendar.css';

ReactDOM.render(
  <MyCalendar/>,
  document.querySelector('#root'));
