import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Button from './Button'
import PropTypes from 'prop-types';


const Display = ({change, amountAcorns}) =>{
  

  return(
    <div className="eatingAcorns">
    <Button handleClick={change} changer={1}/>
    <span className="counter-score">{amountAcorns}</span>
    <Button handleClick={change} changer={-1} />
  </div>
  )
}

Display.propTypes = {
  change: PropTypes.func.isRequired,
  amountAcorns: PropTypes.number.isRequired
}

export default Display;