import React from 'react';
import PropTypes from 'prop-types';
import styles from './LunchItem.css';

function LunchItem({ count, type }) {
  return (
    <p className = {styles.LunchItem}> 
      <span>{count}</span>
      <span>{type}</span>
    </p>
  );
}

LunchItem.propTypes = {
  count: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default LunchItem;
