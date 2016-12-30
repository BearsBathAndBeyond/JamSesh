import React from 'react';
import Navbar from './Navbar.jsx';
import firebase from 'firebase';
import firebaseConfig from '../firebaseConfig.js';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firebaseApp: firebase.initializeApp(firebaseConfig),
    };
  }

  render() {
    const clonedChildren = React.cloneElement(this.props.children, { firebaseApp: this.state.firebaseApp });
    return (
      <div className="container">
        <Navbar />
        {clonedChildren}
      </div>
    );
  }
}

MainContainer.propTypes = { children: React.PropTypes.object };

export default MainContainer;
