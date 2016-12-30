import React from 'react';
import Validation from 'react-validation';
import { Link } from 'react-router';
// import { browserHistory } from 'react-router';

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
      username: event.target.username.value,
      password: event.target.password.value,
    };
    // TODO: update with proper firebase path and auth
  }

  render() {
    return (
      <div className="container">
        {/* <Navbar /> */}
        <h3>Sign In</h3>
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
          Need an account? <Link to="sign-up">Sign up!</Link>
        </div>
      </div>
    );
  }
}

export default SignIn;
