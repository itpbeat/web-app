import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
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
    axios.post('/users/signup', {
      name: this.state.name,
      password: this.state.password
    })
      .then(function(response) { // eslint-disable-line
        console.log(response);
      })
      .catch(function(error) { // eslint-disable-line
        console.log(error);
      });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        Sign up here
        <form onSubmit={this.submitForm}>
          <label> name:
            <input type="text" value={this.state.name} onChange={this.updateName}/>
          </label>
          <label> password:
            <input type="text" value={this.state.password} onChange={this.updatePassword}/>
          </label>
          <input type="submit" value='Submit' />
        </form>
      </div>
    );
  }

}

export default SignUp;
