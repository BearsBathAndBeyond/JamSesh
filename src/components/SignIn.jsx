import React from 'react';
import firebase from 'firebase';
import Validation from 'react-validation';
import { Link, browserHistory } from 'react-router';
import Logo from './jamsesh.png'

Object.assign(Validation.rules, {
  required: {
    rule: value => value.toString().trim(),
    hint: () => <div className="form-error is-visible alert-danger">This field is required!</div>,
  },
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const loginUser = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    let err = false;
    firebase.auth().signInWithEmailAndPassword(loginUser.email, loginUser.password)
      .catch(error => {
        err = true;
        console.warn(error);
      })
      .then(() => {
        if (!err) {
          browserHistory.push('/');
        }
      });
  }

  render() {
    return (
      <div className="container">
        <h3>Sign In</h3>
        <Validation.components.Form onSubmit={this.handleSubmit} className="col-md-8">
          <div className="form-group">
            <Validation.components.Input
              className="form-control"
              value=""
              placeholder="Email"
              name="email"
              validations={['required']}
            />
          </div>
          <div className="form-group">
            <Validation.components.Input
              className="form-control"
              type="password"
              value=""
              placeholder="Password"
              name="password"
              validations={['required']}
            />
          </div>
          <div className="form-group">
            <Validation.components.Button className="btn btn-default col-md-2">
            Sign In</Validation.components.Button>
          </div>
        </Validation.components.Form>
        <div className="col-md-6 text-center">
          Need an account? <Link to="sign-up">Sign up!</Link>
        </div>
        <div>
          <img alt="JamSesh" style={this.imgStyle} className="col-md-4 pull-right" src={Logo} />
        </div>
      </div>
    );
  }
}

export default SignIn;
