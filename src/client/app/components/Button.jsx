import React from 'react';
import '../styles/button.css';

class Button extends React.Component {
  startGame() {
    console.log("button clicked");
  }
  render(){
    return (
      <div className="buttondiv">
      <button className="button" onClick = {this.startGame}> Start </button>
      </div>
    );
  }
}

export default Button;
