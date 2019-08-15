import React from 'react';
import PropTypes from 'prop-types';
import LunchItem from './LunchItem';

function LunchItems({ items }) {
  const listItems = items.map(item => (
    <li key={item.type}>
      <LunchItem type={item.type}  count={item.count}/>
    </li>
  ));

  return (
    <ul>
      {listItems}
    </ul>
  );
  
}

LunchItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  })).isRequired
};



export default LunchItems;
