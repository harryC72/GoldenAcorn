import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button'
import PropTypes from 'prop-types';


const Display = (props) =>{
  

  return(
    <div className="eatingAcorns">
    <Button buy={props.buy} changer={1}/>
    <span className="counter-score">{props.amountAcorns}</span>
    <Button buy={props.buy} changer={-1} />
  </div>
  )
}

export default Display;