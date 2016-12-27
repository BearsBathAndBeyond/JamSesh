class App extends React.Component {
  constructor(props) {
    super(props);

  }
  renderFromLocation() {
    let loc = window.location.pathname;

    if (loc === '/' || loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/index.html') {
      return <Landing />;
    }
    if (loc === '/signin.html' || loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/signin.html') {
      return <Signin />;
    }
    if (loc === '/signup.html' || loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/signup.html') {
      return <Signup />;
    }
    if (loc === '/main.html' || loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/main.html') {
      return <Main />;
    }
    if (loc === '/createGroup.html' || loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/createGroup.html') {
      return <CreateGroup />;
    }

  }


  render() {
    return (
      <div>
        <Nav />
        {this.renderFromLocation()}
      </div>
    );
  }
}
