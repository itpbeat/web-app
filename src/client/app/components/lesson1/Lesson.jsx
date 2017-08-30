import React from 'react';
import '../../styles/lesson.css';
const planet = require('../../assets/main_grouped.png');

class Lesson extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="starBackground">
        <img src={planet} className="planetImg"/>
        <a className="visitButton" href="/lesson1_video"> VISIT </a>
      </div>

    )
  };
}

export default Lesson;
