import React from 'react';
import '../styles/home.css';
const bg = require('../assets/bg_withstuff.png');
const p1 = require('../assets/planet1.png');
const p2 = require('../assets/planet2.png');
const p3 = require('../assets/planet3.png');
const title = require('../assets/title.png');
const logo = require('../assets/beat_logo.png');

var background = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" +  bg + ")",
  backgroundSize: "100% 100%",
};
class Lesson extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="stuffBackground">
        <img src={title} className="titleHome"/>
        <a className="planetLink" href="/lesson1">
          <img src={p1} className="planetHome planet1"/>
        </a>
        <a className="planetLink" href="/lesson2">
          <img src={p2} className="planetHome planet2"/>
        </a>
        <img src={p3} className="planetHome planet3"/>
        <img src={logo} className='logoImg' />
      </div>

    )
  };
}

export default Lesson;
