import React from 'react';
import PropTypes from 'prop-types';

function LunchControls({ types }) {
  const listItems = types.map(({type, clickHandler => (
    <li key={type}>
      <Button type={type} clickHandler={clickHandler}/>
    </li>
  ));

  return (
    <ul>
      {listItems}
    </ul>
  );

LunchControls.propTypes = {
  types: PropTypes.arrayOf(PropTypes.shape({
    types: PropTypes.string.isRequired,
    clickHander: PropTypes.func.isRequired
  })).isRequired
};
  )}

export default LunchControls;
