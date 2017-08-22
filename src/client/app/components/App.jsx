import React from 'react';
import Video from './Video.jsx';
import Lesson from './Lesson.jsx';
import Home from './Home.jsx';
import Beatmachine from './Beatmachine.jsx';
import Wiggy from './Wiggy.jsx';
import SecondLesson from './lesson2/SecondLesson.jsx';
import '../styles/App.css';

import { BrowserRouter as Router, Link, Route, Switch, browserHistory} from 'react-router-dom';

const bgUrl = require('../assets/star_bg.png');
const green = require('../assets/green_bg.png');
var background = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" +  bgUrl + ")",
};
var greenBackground = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" +  green + ")",
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      programState: 0
    }
    this.increaseProgramState = this.increaseProgramState.bind(this);
    this.planetState = this.planetState.bind(this);

  }
  increaseProgramState() {
    this.setState({
      programState: this.state.programState + 1
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
              <Wiggy
                increaseProgramState = {this.increaseProgramState}
              />
            )
          }
        })()}
        {(() => { // eslint-disable-line
          if (this.state.programState == 5) {
            return (
              <SecondLesson
                increaseProgramState = {this.increaseProgramState}
              />
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
