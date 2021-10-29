import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ImageIcon
} from '@material-ui/core';
import './userDetail.css';
import { Link } from 'react-router-dom'

/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (

      <div id="User_details">
        <div>
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={window.cs142models.userModel(this.props.match.params.userId).first_name}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={window.cs142models.userModel(this.props.match.params.userId).last_name}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Location" secondary={window.cs142models.userModel(this.props.match.params.userId).location}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Description" secondary={window.cs142models.userModel(this.props.match.params.userId).description}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupation" secondary={window.cs142models.userModel(this.props.match.params.userId).occupation}></ListItemText>
            </ListItem>
            <ListItem button component={Link} to={`/photos/${this.props.match.params.userId}`}>
              <ListItemText primary="User Photos" />
            </ListItem>
          </List>
        </div>

      </div>

    );
  }
}

/*_id  (string) - The ID of the user.
   first_name (string) - The first name of the user.
   last_name (string) - The last name of the user.
   location (string) - The location of the user.
   description (string) - A brief user description.
   occupation (string) - The occupation of the user.
   */

export default UserDetail;
