import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }
  logOut() {
    console.log("hi");
    let that = this;
    axios.get('/logout')
      .then(function(response) { // eslint-disable-line
        console.log(response);
        if(!response.data.authenticated) {
          that.props.unauthenticateUser();
        }
      })
      .catch(function(error) { // eslint-disable-line
        console.log("NOT authenticated");
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        {(() => { // eslint-disable-line
          if (!this.props.authenticated) {
            return (
              <div>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
              </div>
            );
          } else {
            return (
              <div>
                <p>Welcome {this.props.username}</p>
                <button onClick={this.logOut}>logout</button>
              </div>
            );
          }
        })()}
      </div>
    );
  }
}

export default Nav;
