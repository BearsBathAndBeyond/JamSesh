import React from 'react';
import Validation from 'react-validation';
import validator from 'validator';
import { Link } from 'react-router';
// import { browserHistory } from 'react-router';

Object.assign(Validation.rules, {
  required: {
    rule: value => value.toString().trim(),
    hint: () => <div className="form-error is-visible alert-danger">This field is required!</div>,
  },
  email: {
    rule: value => validator.isEmail(value),
    hint: value => <div className="form-error is-visible alert-danger">{value} isnt a valid email address!</div>,
  },
});

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    // TODO: update with proper firebase path and auth
  }

  render() {
    return (
      <div className="container">
        <h3>Sign Up</h3>
        <Validation.components.Form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <Validation.components.Input
              className="form-control"
              value=""
              placeholder="Username"
              name="username"
              validations={['required']}
            />
          </div>
          <div className="form-group">
            <Validation.components.Input
              className="form-control"
              value=""
              placeholder="Email"
              name="email"
              validations={['required', 'email']}
            />
          </div>
          <div className="form-group">
            <Validation.components.Input
              className="form-control"
              value=""
              placeholder="Password"
              name="password"
              validations={['required']}
            />
          </div>
          <div className="form-group">
            <Validation.components.Button className="btn btn-default col-md-2">
            Sign Up</Validation.components.Button>
          </div>
        </Validation.components.Form>
        <div className="col-md-6 text-center">
          Already a member? <Link to="sign-in">Sign in!</Link>
        </div>
      </div>
    );
  }
}

export default SignUp;
