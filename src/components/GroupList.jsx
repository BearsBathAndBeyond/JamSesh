import React from 'react';
import GroupListItem from './GroupListItem.jsx';

class GroupList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <td className="col-md-1">Inst.</td>
            <td className="col-md-11">Details</td>
          </tr>
        </thead>
        <tbody>
          <GroupListItem />
          <GroupListItem />
          <GroupListItem />
        </tbody>
      </table>
    );
  }
}

export default GroupList;
