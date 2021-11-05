import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
}
  from '@material-ui/core';
import {
  Link
} from 'react-router-dom';
import './userList.css';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: window.cs142models.userListModel()
    };

  }

  render() {
    return (
      <div>
        <List component="nav">
          <Divider />
          {this.state.userList.map((user) =>
            <div key={user._id}>
              <ListItem button component={Link} to={`/users/${user._id}`}>
                <ListItemText primary={user.first_name + " " + user.last_name} />
              </ListItem>
              <Divider />
            </div>
          )}
        </List>
      </div>
    );
  }
}

export default UserList;
