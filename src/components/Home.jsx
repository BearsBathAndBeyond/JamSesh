import React from 'react';
import GroupList from './GroupList.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h2>MAIN</h2>
        <div className="col-md-8">
          this is where all our groups will be listed. eventually.
          <GroupList />
        </div>
        <div className="col-md-4 rounded bg-info">
          this is where our filters will be. eventually.
        </div>
      </div>
    );
  }
}

export default Home;
