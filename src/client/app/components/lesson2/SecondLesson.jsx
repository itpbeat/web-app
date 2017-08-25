import React from 'react';
const planet = require('../../assets/main.png');

class SecondLesson extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <img src={planet} className="planetImg"/>
        <button className="visitButton" onClick={this.props.increaseProgramState}> VISIT </button>
      </div>

    )
  };
}

export default SecondLesson;
