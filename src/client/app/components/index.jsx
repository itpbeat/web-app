import React from 'react';
import axios from 'axios';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, browserHistory} from 'react-router-dom';

import Nav from './Nav.jsx';
import SignUp from './SignUp.jsx';
import Login from './Login.jsx';
import App from './App.jsx';

require('../styles/main.scss');

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      authenticated: false

    };
    this.authenticateUser = this.authenticateUser.bind(this);
    this.unauthenticateUser = this.unauthenticateUser.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
  }
  componentDidMount() {
    let that = this;
    axios.get('/users/user')
      .then(function(response) { // eslint-disable-line
        console.log(response.data)
        that.setState({ authenticated: response.data.authenticated });
        that.setState({ username: response.data.username });
      })
      .catch(function(error) { // eslint-disable-line
        console.log(error);
      });
  }
  authenticateUser() {
    this.setState({ authenticated: true });
  }
  unauthenticateUser() {
    this.setState({ authenticated: false });
  }
  updateUserName(name) {
    console.log(name);
    this.setState({ username: name });
  }
  render() {
    return (
      <Router history={browserHistory}>
        <div className="test">
          <App
            authenticated={this.state.authenticated}
          />
          <Nav
            authenticated={this.state.authenticated}
            username={this.state.username}
            unauthenticateUser={this.unauthenticateUser}
          />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/home" component={() => (
              <App
                authenticated={this.state.authenticated}
              />
            )}
          />
          <Route exact path="/login" component={() => (
              <Login
                authenticateUser={this.authenticateUser}
                updateUserName={this.updateUserName}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

render(<Main/>, document.getElementById('app')); // eslint-disable-line
