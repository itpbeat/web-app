import React from 'react';
import Header from './Header.jsx';
import Video from './Video.jsx';
import Button from './Button.jsx';
import Beatmachine from './Beatmachine.jsx';
import Wiggy from './Wiggy.jsx';
import '../styles/App.css';

import { BrowserRouter as Router, Link, Route, Switch, browserHistory} from 'react-router-dom';

const bgUrl = require('../assets/star_bg.png');
var background = {
  width: "100%",
  backgroundImage: "url(" +  bgUrl + ")"
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      programState: 0
    }
    this.increaseProgramState = this.increaseProgramState.bind(this);
  }
  increaseProgramState() {
    this.setState({
      programState: this.state.programState + 1
    })
  }
  render() {
    return (
      <section style = {background}>
        <div>
        {(() => { // eslint-disable-line
          if (this.state.programState == 0) {
            return (
              <div>
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
          if (this.state.programState == 1) {
            return (
              <Beatmachine
                increaseProgramState = {this.increaseProgramState}
              />
            )
          }
        })()}
        {(() => { // eslint-disable-line
          if (this.state.programState == 2) {
            return (
              <Wiggy
                increaseProgramState = {this.increaseProgramState}
              />
            )
          }
        })()}

        </div>
      </section>
    );
  }
}
const loadBeat = ({ match }) =>(
  <Beatmachine />
)

export default App;
