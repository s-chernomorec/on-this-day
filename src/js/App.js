import axios from 'axios';
import find from "lodash/find";
import React, {Component} from 'react';
import {render} from 'react-dom';

import helpers from './helpers';
import Router from './components/Router';


const {assign, isObject, isInteger, loadData, compareDates, memoizeDateData, LS} = helpers;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date,
      data: {},
      description: ""
    };

    this.memoizedState = [];

    this.fetchData = this.fetchData.bind(this);
    this.setStateAndMemoize = this.setStateAndMemoize.bind(this);
    this.navigateToDate = this.navigateToDate.bind(this);
    this.loadOrTakeMemoizedData = this.loadOrTakeMemoizedData.bind(this);
  }

  fetchData(date) {
    loadData(date, this.setStateAndMemoize);
  }

  setStateAndMemoize(data) {
    this.setState(prevState => assign(prevState, data));
    this.memoizedState = memoizeDateData(data, this.memoizedState);
  }

  loadOrTakeMemoizedData(date) {
    const found = find(this.memoizedState, d => compareDates(date, d.date));

    if (found === undefined) {
      this.fetchData(date);
    } else if (isObject(found)) {
      this.setState(prevState => assign(prevState, found));
    }
  }

  componentDidMount() {
    this.fetchData(this.state.date);
  }

  navigateToDate(counter) {
    if (isInteger(counter)) {
      let newDate = new Date(this.state.date.getTime());
      newDate.setDate(this.state.date.getDate() + counter);

      this.loadOrTakeMemoizedData(newDate);
    }
  }

  render() {
    let props = {
      navigateToDate: this.navigateToDate
    };

    props = assign(props, this.state);

    return <Router {...props} />;
  }
}

render(<App />, document.getElementById('app'));
