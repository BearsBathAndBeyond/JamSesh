import React from 'react';
import { Link } from 'react-router';
import firebase from 'firebase';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messagesFetched: false,
    };
  }

  componentDidMount() {
    if (firebase.auth().currentUser) {
      const user = firebase.auth().currentUser.displayName;
      console.log(user, 'test');
      firebase.database().ref(`/messages/${user}`)
      .on('value', snapshot => {
        const snap = snapshot.val();
        for(const key in snapshot.val()) {
          console.log(key, 'key');
          snap[key].exists = key;
          this.state.messages.push(snap[key])
        }
      });
      this.setState({ messagesFetched: true });
    } else {
      this.setState({ rerender: true });
    }
  }

  render() {
    console.log(this.state.messages);
    return (<div className="navbar navbar-default">
        {firebase.auth().currentUser ? (
          <div className="container-fluid">
            <ul className="nav navbar-nav nav-pills col-md-8">
              <li>
                <Link className="dark button" to="/"><span>Home</span></Link>
              </li>
              <li>
                <Link className="dark button" to="create-group"><span>Create Group</span></Link>
              </li>
              <li>
                <Link className="dark button" to="inbox">
                  <span>Inbox </span>
<<<<<<< HEAD
                  {/* <span className="bg-danger">{this.state.messages.length}</span> */}
=======
                  <span className="bg-danger">{this.state.messages.length}</span>
>>>>>>> working on navbar and inbox
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-right nav-pills col-md-4">
              <li>
                <div>
                  Hello, {firebase.auth().currentUser.displayName}!
                </div>
              </li>
              <li>
                <a href="#" onClick={this.props.logOut}>Log Out</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="container">
            <ul className="nav nav-pills">
              <li>
                <Link className="dark button" to="/"><span>Home</span></Link>
              </li>
              <li>
                <Link className="dark button" to="sign-in"><span>Sign in</span></Link>
              </li>
              <li>
                <Link className="dark button" to="sign-up"><span>Sign up</span></Link>
              </li>
            </ul>
          </div>
        )}
    </div>
  ); }
}

export default Navbar;
