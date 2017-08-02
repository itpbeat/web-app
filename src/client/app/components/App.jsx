import React from 'react';
import Header from './Header.jsx';
import Video from './Video.jsx';
import Button from './Button.jsx';
import Lesson from './Lesson.jsx';
import Beatmachine from './Beatmachine.jsx';
import Wiggy from './Wiggy.jsx';
import '../styles/App.css';

import { BrowserRouter as Router, Link, Route, Switch, browserHistory} from 'react-router-dom';

const bgUrl = require('../assets/star_bg.png');
const green = require('../assets/green_bg.png');
var background = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" +  bgUrl + ")"
};
var greenBackground = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" +  green + ")"
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      programState: 0
    }
    this.increaseProgramState = this.increaseProgramState.bind(this);
  }
  increaseProgramState() {
    console.log("increase");
    this.setState({
      programState: this.state.programState + 1
    })
  }
  render() {
    return (
        <div>
        {(() => { // eslint-disable-line
          if (this.state.programState == 0) {
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
          if (this.state.programState == 1) {
            return (
              <div style = {background}>
                <Header/>
                <Video/>
                <Button
                  increaseProgramState = {this.increaseProgramState}
                />
              </div>
            )
          }
        })()}
        {(() => { // eslint-disable-line
          if (this.state.programState == 2) {
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
          if (this.state.programState == 3) {
            return (
              <Wiggy
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
