import React from 'react';
import { browserHistory } from 'react-router';

class GroupListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    browserHistory.push('group-details');
  }
  render() {
    return (
      <tr onClick={this.handleClick}>
        <td>Test</td>
        <td>Test</td>
      </tr>
    );
  }
}

export default GroupListItem;
