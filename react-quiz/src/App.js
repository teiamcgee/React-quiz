import React, { Component } from 'react';
import Expert from './Expert';
import Standard from './Standard';
import SelectedLevel from './SelectedLevel';

    const Game = {
    "questions" :[
      {"standard" : "Guess a number between 1 - 10", "answer": Math.random(Math.floor() * 11), "isSelected": false},
      {"expert" : "Guess a number between 1 - 100", "answer" : Math.random(Math.floor() * 101), "isSelected": false}
     ]
    }
    class App extends Component {
      constructor(){
        super();
        this.state = Game;
    }

    ExpertHandleClick(isSelected,questions){
      const expert= this.state.questions.slice();
      const index = this.state.questions.findIndex(function(level){
       return level.expert = expert

    })
  }

    StandardHandleClick(isSelected,questions) {
      const standard= this.state.questions.slice();
      const index = this.state.questions.findIndex(function(level){
       return level.standard = standard

    })
  }


  render() {
    <Expert
    question ={level.questions}
    answer ={level.answer}
    isSelect = {level.isSelected}
    />

    <Standard
    question ={level.questions}
    answer ={level.answer}
    isSelect = {level.isSelected}
    />

    <SelectedLevel
    question ={level.questions}
    answer ={level.answer}
    />



    return (
      <div className="Banner">
        <h1>Start Game</h1>
        <h2>Pick your level</h2>
        <button>Expert</button>
        <button>Standard</button>
        <button>Reset</button>
        {SelectedLevel}
      </div>
    );
  }
}

export default App;
