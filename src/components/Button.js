import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display'
import PropTypes from 'prop-types';

const Button = ({handleClick ,changer, buttonValue}) =>{

  Button.PropTypes = {
    changer = PropTypes.number
  }

  return(
    <button onClick={() => handleClick(changer)}>{buttonValue}</button>

  )
}

export default Button;


// const Button = (props) => {
//   return (<button onClick={props.handleClick}>{props.value}</button>);
// }

// export default Button