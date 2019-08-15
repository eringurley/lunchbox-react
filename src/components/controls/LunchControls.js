import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

//presenational component (which uses functions instead of classes/component)
function LunchControls({ types }) {
  const listItems = types.map(({ type, clickHandler }) => (
    <li key={type}>
      <Button type={type} clickHandler={clickHandler}/>
    </li>
  ));

  return (
    <ul>
      {listItems}
    </ul>
  );
}

LunchControls.propTypes = {
  types: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
  })).isRequired
};

export default LunchControls;

