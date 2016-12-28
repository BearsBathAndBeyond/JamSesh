import React from 'react';
import { browserHistory } from 'react-router';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.inputUsername = this.inputUsername.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputPassword = this.inputPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    // TODO: handle post request with this data
    console.log('submitting data: ', this.state);
    event.preventDefault();
  }

  inputUsername (event) {
    this.setState({username: event.target.value});
  }
  inputEmail (event) {
    this.setState({email: event.target.value});
  }
  inputPassword (event) {
    this.setState({password: event.target.value});
  }

  render () {
    return (
      <div>
        <h3>Sign Up</h3>

        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.inputUsername} placeholder="Username"></input><br />
          <input type="text" onChange={this.inputEmail} placeholder="Email"></input> <br />
          <input type="password" onChange={this.inputPassword} placeholder="Password"></input> <br />
          <button type="submit">Sign up</button>
        </form>

        <div>
          Already a member? <a href="signin.html">Sign in!</a>
        </div>

      </div>
    );
  }
}

export default SignUp;
