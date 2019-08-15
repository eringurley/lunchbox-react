import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LunchBox extends Component {
  state = {
    types: {
      drinkCount: 0,
      sandwichCount: 0,
      chipsCount: 0
    }

    clickHandler = type => {
      const key =`${type.toLowerCase()}Count`;
      this.setState(state => { [key]: state[key] + 1 }));
    }

    chipsClickHandler = type => {
      this.setState(state => { chipsCount: state.chipsCount} + 1 }));
    
  
  render() {
    const lunchBoxContents = [
      { type: 'Drinks', count: this.state.drinkCount, clickHandler: this.clickHandler },
      { type: 'Chips', count: this.state.chipsCount, clickHandler: this.clickHandler },
      { type: 'Sandwich', count: this.state.sandwichCount, clickHandler: this.chipsClickHandler }
    ]
    
    return (
      <>
        <LunchControls types={lunchBoxContents} />
        <LunchItems items={lunchBoxContents} />
      </>

    )
  };

  export default LunchBox;

