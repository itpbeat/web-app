import React from 'react';
import '../styles/lesson.css';
const planet = require('../assets/main_grouped.png');

class Lesson extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <img src={planet}/>
        <button className="button" onClick={this.props.increaseProgramState}> Visit </button>
      </div>

    )
  };
}

export default Lesson;
