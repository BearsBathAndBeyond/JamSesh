class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.inputUsername = this.inputUsername.bind(this);
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

  inputPassword (event) {
    this.setState({password: event.target.value});
  }

  render () {
    return (
      <div>
        <h3>Sign Up</h3>

        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.inputUsername} placeholder="Username"></input><br />
          <input type="password" onChange={this.inputPassword} placeholder="Password"></input> <br />
          <button type="submit">Sign up</button>
        </form>

        <div>
          Need an account? <a href="signup.html">Sign up!</a>
        </div>

      </div>
    );
  }
}
