import React, { Component } from 'react';

  class App extends Component {
    constructor(){
    super();
    // bind the standard function to state
    this.standard = this.standard.bind(this);
    // bind the expert function to state
    this.expert = this.expert.bind(this);
    // bind the userIput function to state
    this.userInput = this.userInput.bind(this);
    // bind the tries function to state
    this.tries = this.tries.bind(this);
    // bind the reset function to state
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
  // grabbing the users guess
  let guess = event.target.value;
  this.setState({
    // setting the empty user guess string to the guess variable
    userGuess :guess,
  })
}

tries(){
  // setting variable to equal the state values
let tries = this.state.numberOfTries;
let guess = this.state.userGuess;
let userNum = this.state.userGuess;
let highscore = this.state.numberOfTries.length;
let userGame = this.state.gameMode;
const correctNumber = this.state.correctNumber;
const usermessage = this.state.message;
// pushing the users guess into the guess array
  tries.push(guess);

  this.setState({
    // setting state for the number of tries
    numberOfTries:tries,
  })
  // checking to see if the user has guessed the right number in expert mode and record the number of tries
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
    // setting the state to standard
    gameMode: "expert",
  })

  this.setState({
    // recording the number of tries
    numberOfTries:tries,
  })
  // checking to see if the user has guessed the right number in standard mode and record the number of tries
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
  // getting a random number
  let randomNum =  Math.floor(Math.random() * 10);
  this.setState({
    // setting the answer equal to the random number
    correctNumber : randomNum,
    // setting the game mode to standard
    gameMode: "standard",
  })
}



expert(){
  // getting a random number less than 100
  let randomNum =  Math.floor(Math.random() * 100);
  this.setState({
    // setting the correct answer to the random number
    correctNumber : randomNum,
    // set the game mode to expert
    gameMode: "expert",
  })
}

reset(){
  // reset the initial state
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
