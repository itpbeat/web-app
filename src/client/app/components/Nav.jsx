import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  componentDidUpdate() {

    console.log(this.props);
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
              <p>Welcome {this.props.username}</p>
            );
          }
        })()}
      </div>
    );
  }
}

export default Nav;
