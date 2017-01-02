import React from 'react';
import firebase from 'firebase';
import Validation from 'react-validation';
import Logo from './jamsesh.png';


import { browserHistory } from 'react-router';
Object.assign(Validation.rules, {
  required: {
    rule: value => value.toString().trim(),
    hint: () => <div className="form-error is-visible alert-danger">This field is required!</div>,
  },
});
class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: firebase.auth().currentUser.displayName,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    const newGroup = {
      owner: this.state.user,
      instrument: event.target.instrument.value,
      name: event.target.name.value,
      genre: event.target.genre.value,
      loc: event.target.loc.value,
      avail: event.target.avail.value,
      details: event.target.details.value,
    };
    this.props.firebaseApp.database().ref(`groups/${event.target.name.value}`).push(newGroup);
    browserHistory.push('/');
    this.imgStyle = {
      'max-width': '100%',
      'max-height': '100%',
    };
  }
  render() {
    return (
      <div className="container">
        <h3>Create Group</h3>
        <Validation.components.Form onSubmit={this.handleSubmit} className="col-md-8">
          <div className="form-group">
            <Validation.components.Input
              className="form-control"
              value=""
              placeholder="Instrument needed"
              name="instrument"
              validations={['required']}
            />
          </div>
          <div className="form-group">
            <Validation.components.Input
              className="form-control"
              value=""
              placeholder="Group Name"
              name="name"
              validations={['required']}
            />
          </div>
          <div className="form-group">
            <Validation.components.Input
              className="form-control"
              value=""
              placeholder="Genre"
              name="genre"
              validations={['required']}
            />
          </div>
          <div className="form-group">
            <Validation.components.Input
              className="form-control"
              value=""
              placeholder="Location"
              name="loc"
              validations={['required']}
            />
          </div>
          <div className="form-group">
            <Validation.components.Input
              className="form-control"
              value=""
              placeholder="Availability"
              name="avail"
              validations={['required']}
            />
          </div>
          <div className="form-group">
            <Validation.components.Textarea
              className="form-control"
              value=""
              placeholder="Details"
              name="details"
              validations={['required']}
            />
          </div>
          <div>
            <Validation.components.Button className="btn btn-default btn-block">
            Submit</Validation.components.Button>
          </div>
        </Validation.components.Form>
        <div>
          <img alt="JamSesh" style={this.imgStyle} className="col-md-4 pull-right" src={Logo} />
        </div>
      </div>
    );
  }
}

export default CreateGroup;
