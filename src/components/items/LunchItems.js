import React from 'react';
import PropTypes from 'prop-types';
import styles from './LunchItems.css';

function LunchItems({ type, count }) {
  const listItems = items.map(item => (
    <li key={item.type}>
      <LunchItem type={item.type}  count={item.count}>
    </li>
  ))
  
}

LunchItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  })
};

export default LunchItems;