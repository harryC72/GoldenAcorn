import React from 'react';
import ReactDOM from 'react-dom';


class Acorns extends React.Component{

  state = {
      acorns: 0
    }
  
   buy = () =>{
     this.setState( prevState =>{
       return{
         acorns: prevState.acorns + 1
       }
     });
   }

   eat = () =>{
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
      <div className="eatingAcorns">
        <button onClick = { this.buy }>Buy one</button>
        <span className="counter-score">{this.state.acorns}</span>
        <button className="counter-action increment" onClick={this.eat}>Eat one</button>
      </div>
    )
  }
}





ReactDOM.render(
  < Acorns />,
  document.getElementById('root'),
);

