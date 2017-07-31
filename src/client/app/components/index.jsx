import React from 'react';
import axios from 'axios';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, browserHistory} from 'react-router-dom';

import App from './App.jsx';

require('../styles/beatmachine.css');

class Main extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <Router history={browserHistory}>
        <div className="test">
          <App/>
        </div>
      </Router>
    );
  }
}

render(<Main/>, document.getElementById('app')); // eslint-disable-line
