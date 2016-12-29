import React from 'react';
import firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';
import Validation from 'react-validation';
import validator from 'validator';
// import { browserHistory } from 'react-router';

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      loc: '',
      avail: '',
      details: '',
      firebaseApp: firebase.initializeApp(firebaseConfig),
    };

    this.inputName = this.inputName.bind(this);
    this.inputGenre = this.inputGenre.bind(this);
    this.inputLoc = this.inputLoc.bind(this);
    this.inputAvail = this.inputAvail.bind(this);
    this.inputDetails = this.inputDetails.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGroup = {
      name: this.state.name,
      genre: this.state.genre,
      loc: this.state.loc,
      avail: this.state.avail,
      details: this.state.details,
    };
    this.state.firebaseApp.database().ref(`groups/${this.state.name}`).push(newGroup);
  }

  inputName(event) {
    this.setState({ name: event.target.value });
  }
  inputGenre(event) {
    this.setState({ genre: event.target.value });
  }
  inputLoc(event) {
    this.setState({ loc: event.target.value });
  }
  inputAvail(event) {
    this.setState({ avail: event.target.value });
  }
  inputDetails(event) {
    this.setState({ details: event.target.value });
  }


  render() {
    return (
      <div>
        <h3>Create Group</h3>

        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.inputName} placeholder="Group Name"></input><br />
          <input type="text" onChange={this.inputGenre} placeholder="Genre"></input><br />
          <input type="text" onChange={this.inputLoc} placeholder="Location"></input><br />
          <input type="text" onChange={this.inputAvail} placeholder="Availability"></input><br />
          <input type="text" onChange={this.inputDetails} placeholder="Details"></input><br />

          <button type="submit">Create Group</button>
        </form>


      </div>
    );
  }
}

export default CreateGroup;
