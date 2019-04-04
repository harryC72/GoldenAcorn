import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display'


export default class Acorns extends React.Component{

  state = {
      acorns: 0
    }
  
   handleBuy = (delta) =>{
     this.setState( prevState =>{
       return{
         acorns: prevState.acorns += delta
       }
     });
   }

   handleEat = () =>{
    this.setState( prevState =>{
      {if(prevState.acorns !== 0){
        return{
          acorns: prevState.acorns - 1
        }
      }}
    });
  }

  render(){
    return(
     <Display buy={this.handleBuy} eat={this.handleEat} amountAcorns ={this.state.acorns}/>
    )
  }
}





