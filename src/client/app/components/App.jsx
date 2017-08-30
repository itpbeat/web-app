import React from 'react';
import Video1 from './lesson1/Video.jsx';
import Lesson1 from './lesson1/Lesson.jsx';
import Home from './Home.jsx';
import Beatmachine from './lesson1/Beatmachine.jsx';
import Simonsays from './lesson2/Simonsays.jsx';
import Wiggy from './lesson1/Wiggy.jsx';
import Lesson2 from './lesson2/SecondLesson.jsx';
import Video2 from './lesson2/SecondVideo.jsx';
import Zububu from './lesson2/Zububu.jsx';
import '../styles/App.css';

import {BrowserRouter as Router, Link, Route, Switch, browserHistory} from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router>
        <div>
          <a className = "home__button" href='/'>
            Home
          </a>
          <Route exact
          path="/"
          component={Home}
          />
          <Route exact
            path="/lesson1"
            component={Lesson1}
          />
          <Route exact
            path="/lesson1_video"
            component={Video1}
          />
          <Route exact
            path="/lesson1_beatmachine"
            component={Beatmachine}
          />
          <Route exact
            path="/lesson1_wiggy"
            component={Wiggy}
          />
          <Route exact
            path="/lesson2"
            component={Lesson2}
          />
          <Route exact
            path="/lesson2_video"
            component={Video2}
          />
          <Route exact
            path="/lesson2_simonsays"
            component={Simonsays}
          />
          <Route exact
            path="/lesson2_zububu"
            component={Zububu}
          />
        </div>
      </Router>
    );
  }
}
const loadBeat = ({match}) => (<Beatmachine/>)
export default App;
