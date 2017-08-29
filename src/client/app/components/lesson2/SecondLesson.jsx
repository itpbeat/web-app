import React from 'react';
const planet = require('../../assets/main.png');

class SecondLesson extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="starBackground">
        <img src={planet} className="planetImg"/>
        <a className="visitButton" href="/lesson2_video"> VISIT </a>
      </div>

    )
  };
}

export default SecondLesson;
