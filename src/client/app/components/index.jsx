import React from 'react';
import ReactDOM , {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Counter from './Counter.jsx';
import App from './App.jsx';
import SignUp from './SignUp.jsx';
import Login from './Login.jsx';

class Main extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

render(<Main/>, document.getElementById('app'));
