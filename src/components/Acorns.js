import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display'


export default class Acorns extends React.Component{

 
  render(){
    return(
     <Display change={this.handleChange} amountAcorns ={this.state.acorns}/>
    )
  }
}





