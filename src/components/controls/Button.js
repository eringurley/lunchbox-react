import React from 'react';
import PropTypes from 'prop-types';

function Button({ type, clickHandler }) {
  return  (
    <button onClick={() => clickHandler(type)}>{type}</button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default Button;
