import React from 'react';
import '../../styles/lesson.css';
const planet = require('../../assets/main_grouped.png');
const logo = require('../../assets/beat_logo.png');

class Lesson extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <img src={planet} className="planetImg"/>
        <button className="visitButton" onClick={this.props.increaseProgramState}> VISIT </button>
        <img src={logo} className='logoImg' />
      </div>

    )
  };
}

export default Lesson;
