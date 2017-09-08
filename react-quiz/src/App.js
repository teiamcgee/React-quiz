import React, { Component } from 'react';



  class App extends Component {
    constructor(){
    super();
    this.standard = this.standard.bind(this);
    this.expert = this.expert.bind(this);
    this.userInput = this.userInput.bind(this);
    this.tries = this.tries.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      userGuess: "",
      numberOfTries: [],
      expertHighScore: 0,
      standardHighScore: 0,
      correctNumber: 0,
      gameMode: "",
      message: ""
    }
}

userInput(event){
  let guess = event.target.value;
  this.setState({
    userGuess :guess,
  })
}

tries(){
let tries = this.state.numberOfTries;
let guess = this.state.userGuess;
let userNum = this.state.userGuess;
let highscore = this.state.numberOfTries.length;
let userGame = this.state.gameMode;
const correctNumber = this.state.correctNumber;
const usermessage = this.state.message;

  tries.push(guess);

  this.setState({
    numberOfTries:tries,
  })
  if(userNum == correctNumber & userGame == "expert" ){
     this.setState({
       usermessage : "You have guess the right number",
       expertHighScore: highscore

   })
  } else if (userNum < correctNumber & userGame == "expert" ){
     this.setState({
       usermessage : "You number was to low",
     })

  } else if (userNum > correctNumber & userGame == "expert" ){

     this.setState({usermessage : "You number was to high"})
}
  this.setState({
    gameMode: "standard",
  })
  this.setState({
    numberOfTries:tries,
  })

  if(userNum == correctNumber & userGame == "standard" ){
     this.setState({
       usermessage : "You have guess the right number",
       standardHighScore: highscore

   })
 } else if (userNum < correctNumber & userGame == "standard" ){
     this.setState({
       usermessage : "You number was to low",
     })

  } else if (userNum > correctNumber & userGame == "standard" ){

     this.setState({usermessage : "You number was to high"})
}
  this.setState({
    gameMode: "standard",
  })
}



standard(){
  let randomNum =  Math.floor(Math.random() * 10);
  this.setState({
    correctNumber : randomNum,
    gameMode: "standard",
  })
}



expert(){
  let randomNum =  Math.floor(Math.random() * 100);
  this.setState({
    correctNumber : randomNum,
    gameMode: "expert",
  })
}

reset(){
  this.setState({
    userGuess: "",
    numberOfTries: [],
    expertHighScore: 0,
    standardHighScore: 0,
    correctNumber: 0,
    gameMode: "",
    message: "",
    usermessage: ""
  })
}


  render() {
    return (
      <div id="container">
        <h1>Start Game</h1>
        <h3>Your guess was to high</h3>
        <button onClick={this.standard}>Standard</button><button onClick={this.expert}>Expert</button>
          <div>
            <input type="text" value={this.state.userGuess} onChange={this.userInput} /><button onClick={this.tries}>Guess</button>
              <h2>Number of Guesses : {this.state.numberOfTries.length}</h2>
              <h3>{this.state.usermessage}</h3>
              <h3>Expert High Score: {this.state.expertHighScore}</h3>
              <h3>Standard High Score: {this.state.standardHighScore}</h3>
            <button onClick={this.reset}>Reset</button>
          </div>
      </div>

    );
  }
}

export default App;
