import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.logOut = this.logOut.bind(this);
    this.redirectHome = this.redirectHome.bind(this);
    this.state = {
      name: '',
      password: ''
    };
  }
  updateName(event) {
    this.setState({ name: event.target.value });
  }
  updatePassword(event) {
    this.setState({ password: event.target.value });
  }
  submitForm(event) {
    console.log('press submit');
    console.log(this.props);
    let that = this;
    axios.post('/login', {
      name: this.state.name,
      password: this.state.password
    })
      .then(function(response) {
        if(response.data.authenticated) {
          that.props.updateUserName(that.state.name);
          that.props.authenticateUser();
          console.log("Logged in");
        }
      })
      .catch(function(error) { // eslint-disable-line
        console.log("NOT authenticated");
        console.log(error);
      });
    event.preventDefault();
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
  redirectHome() {
    location.href='/home';
  }
  render() {
    return (
      <div>
        Log In here
        <form onSubmit={this.submitForm}>
          <label> name:
            <input type="text" value={this.state.name} onChange={this.updateName}/>
          </label>
          <label> password:
            <input type="text" value={this.state.password} onChange={this.updatePassword}/>
          </label>
          <input type="submit" value='Submit' onClick={this.redirectHome}/>
        </form>
      </div>
    );
  }

}

export default Login;
