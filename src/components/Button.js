import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display'
import PropTypes from 'prop-types';

const Button = (props) =>{

  Button.PropTypes = {
    changer = PropTypes.number
  }

  return(
    <button onClick={() => props.buy(props.changer)}>Eat one</button>

  )
}

export default Button;

