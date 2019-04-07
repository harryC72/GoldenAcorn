import * as ButtonActionTypes from '../ActionTypes/button'

export const Eat = amount =>{
  return{type: ButtonActionTypes.DECREMENT,
    amount
  }
}

export const Buy = amount =>{
  return{type: ButtonActionTypes.INCREMENT,
  amount
  }
}