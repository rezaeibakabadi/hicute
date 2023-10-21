import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import HomePage from '../components/HomePage/home.js';

import classes from './App.css'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className={classes.App}>
        <HomePage/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
