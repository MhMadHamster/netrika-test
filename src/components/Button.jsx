import React, { PropTypes } from 'react';

const Button = props => (
  <button
    onClick={props.onClick}
  >
    {props.text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  text: 'Button',
};

export default Button;
