import * as buttonActionTypes from '../actions'

const buttonReducer = (state = 0, action) =>{
  switch(action.type){
    case buttonActionTypes.INCREMENT:
    return state + 1;
    case buttonActionTypes.DECREMENT:
    return state - 1;
    default:
    return state;
  }
}

export default buttonReducer;