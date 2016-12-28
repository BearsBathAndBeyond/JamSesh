import React from 'react';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

MainContainer.propTypes = { children: React.PropTypes.object };

export default MainContainer;
