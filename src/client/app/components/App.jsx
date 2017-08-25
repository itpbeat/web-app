import React from 'react';
import Video from './lesson1/Video.jsx';
import Lesson from './lesson1/Lesson.jsx';
import Home from './Home.jsx';
import Beatmachine from './lesson1/Beatmachine.jsx';
import Simonsays from './lesson2/Simonsays.jsx';
import Wiggy from './lesson1/Wiggy.jsx';
import SecondLesson from './lesson2/SecondLesson.jsx';
import SecondVideo from './lesson2/SecondVideo.jsx';
import Bubu from './lesson2/Zububu.jsx';
import '../styles/App.css';

import { BrowserRouter as Router, Link, Route, Switch, browserHistory} from 'react-router-dom';

const bgUrl = require('../assets/star_bg.png');
const green = require('../assets/bg.png');
var background = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" +  bgUrl + ")",
  backgroundSize: "100% 100%",
};
var greenBackground = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" +  green + ")",
  backgroundSize: "100% 100%",
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      programState: 0
    }
    this.increaseProgramState = this.increaseProgramState.bind(this);
    this.planetState = this.planetState.bind(this);
    this.resetToHome = this.resetToHome.bind(this);

  }
  increaseProgramState() {
    this.setState({
      programState: this.state.programState + 1
    })
  }
  resetToHome() {
    this.setState({
      programState: 0
    })
  }
  planetState() {
    this.setState({
      programState: this.state.programState + 5
    })
  }
  render() {
    return (
        <div>
          <button className = "home__button" onClick={this.resetToHome}>
            Home
          </button>
        {(() => { // eslint-disable-line
          if (this.state.programState == 0) {
            return (
              <Home
                increaseProgramState = {this.increaseProgramState}
                planetState = {this.planetState}
              />
            )
          }
        })()}
        {(() => { // eslint-disable-line
          if (this.state.programState == 1) {
            return (
              <div style = {background}>
                <Lesson
                  increaseProgramState = {this.increaseProgramState}
                />
              </div>
            )
          }
        })()}
        {(() => { // eslint-disable-line
          if (this.state.programState == 2) {
            return (
              <div style = {background}>
                <Video
                  increaseProgramState = {this.increaseProgramState}
                />
              </div>
            )
          }
        })()}
        {(() => { // eslint-disable-line
          if (this.state.programState == 3) {
            return (
              <div style = {greenBackground}>
                <Beatmachine
                  increaseProgramState = {this.increaseProgramState}
                />
              </div>
            )
          }
        })()}
        {(() => { // eslint-disable-line
          if (this.state.programState == 4) {
            return (
              <div style = {background}>
              <Wiggy
                increaseProgramState = {this.increaseProgramState}
              />
              </div>
            )
          }
        })()}
        {(() => { // eslint-disable-line
          if (this.state.programState == 5) {
            return (
              <div style = {background}>
                <SecondLesson
                  increaseProgramState = {this.increaseProgramState}
                />
              </div>
            )
          }
        })()}
        {(() => { // eslint-disable-line
          if (this.state.programState == 6) {
            return (
              <div style = {background}>
                <SecondVideo
                  increaseProgramState = {this.increaseProgramState}
                />
              </div>
            )
          }
        })()}
        {(() => { // eslint-disable-line
          if (this.state.programState == 7) {
            return (
              <div style = {background}>
                <Simonsays
                  increaseProgramState = {this.increaseProgramState}
                />
              </div>
            )
          }
        })()}
        {(() => { // eslint-disable-line
          if (this.state.programState == 8) {
            return (
              <div style = {background}>
                <Bubu/>
              </div>
            )
          }
        })()}
        </div>
    );
  }
}
const loadBeat = ({ match }) =>(
  <Beatmachine />
)

export default App;
