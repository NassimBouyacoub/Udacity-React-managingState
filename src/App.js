import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
	const value1 = Math.floor(Math.random() * 100);
	const value2 = Math.floor(Math.random() * 100);
	const value3 = Math.floor(Math.random() * 100);
	const result = value1 + value2 + value3;

	const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

class App extends Component {

  state = {
    value1 : Math.floor(Math.random() * 100),
	value2 : Math.floor(Math.random() * 100),
	value3 : Math.floor(Math.random() * 100),
	result : value1 + value2 + value3,
    proposedAnswer : Math.floor(Math.random() * 3) + result ,
	numQuestions : 0,
	numCorrect : 0,
    answer:(result===proposedAnswer)
  }
  
 questionResponded =(ans)=>{  
   
 this.setState.bind(this)((currentState)=>({ 
    numQuestions: currentState.numQuestions+1,
    value1 : Math.floor(Math.random() * 100),
	value2 : Math.floor(Math.random() * 100),
	value3 : Math.floor(Math.random() * 100),
    result : currentState.value1 +currentState.value2+currentState.value3,
    proposedAnswer: Math.floor(Math.random() * 3) + currentState.result,
    answer:(currentState.result===currentState.proposedAnswer),
  }))
 if(ans){
    if(this.state.answer){
     this.setState.bind(this)((currentState)=>({ 
     numCorrect:currentState.numCorrect+1,
     }))}}
 else{
      if(!this.state.answer){
     this.setState.bind(this)((currentState)=>({ 
     numCorrect:currentState.numCorrect+1,
     }))}
  
 }}
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={()=>this.questionResponded(true)}>True</button>
          <button onClick={()=>this.questionResponded(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
