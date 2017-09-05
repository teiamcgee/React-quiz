import React from 'react';



function SelectedLevel(props){
  return(
<div>
    <div>
      <h2>{props.question}</h2>
      <input type="text" />
    </div>
    <div className="Guesses">
    <h3>It took {} tries to get {props.answer}</h3>
    </div>
</div>    
  )

}



export default SelectedLevel;
