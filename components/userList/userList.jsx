import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
  from '@material-ui/core';
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
        <p></p>
        <Typography variant="body1">
          This is the user list, which takes up 3/12 of the window.
          You might choose to use <a href="https://material-ui.com/demos/lists/">Lists</a> and <a href="https://material-ui.com/demos/dividers">Dividers</a> to
          display your users like so:
        </Typography>
        <List component="nav">
          <Divider />
          {this.state.userList.map((user) =>
            <div key={user._id}>
              <ListItem>
                <ListItemText primary={user.first_name + " " + user.last_name} />
              </ListItem>
              <Divider />
            </div>
          )}
        </List>
        <Typography variant="body1">
          The model comes in from window.cs142models.userListModel()
        </Typography>
      </div>
    );
  }
}

export default UserList;
