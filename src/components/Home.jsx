import React from 'react';
import { Link, browserHistory } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>MAIN</h2>
        <div> this is where all our groups will be listed. eventually.</div>
        <Link to="sign-up">Sign up</Link>
        <Link to="sign-in">Sign in</Link>
        <Link to="create-group">Create Group</Link>
      </div>
    );
  }
}

export default Home;
