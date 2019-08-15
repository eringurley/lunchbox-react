import React, { Component } from 'react';
import LunchControls from  './controls/LunchControls';
import LunchItems from './items/LunchItems';

export default class LunchBox extends Component {
  state = {
    drinkCount: 0,
    sandwichCount: 0,
    chipsCount: 0
  }

    clickHandler = type => {
      const key = `${type.toLowerCase()}Count`;
      this.setState(state => ({ [key]: state[key] + 1 }));
    }

    chipsClickHandler = ()=> {
      console.log('Chips clicked!!!');
      this.setState(state => ({ chipsCount: state.chipsCount + 1 }));
    }
  
    render() {
      const lunchBoxContents = [
        { type: 'Drink', count: this.state.drinkCount, clickHandler: this.clickHandler },
        { type: 'Sandwich', count: this.state.sandwichCount, clickHandler: this.clickHandler },
        { type: 'Chips', count: this.state.chipsCount, clickHandler: this.chipsClickHandler }
      ];
    
    
      return (
      <>
        <input type="text" value={this.state.text} />
        <LunchControls types={lunchBoxContents} />
        <LunchItems items={lunchBoxContents} />
      </>
      );
    }
}
