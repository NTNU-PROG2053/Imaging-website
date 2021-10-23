import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  HashRouter,
} from '@material-ui/core';
import './userDetail.css';


/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userModel: window.cs142models.userModel(this.props.match.params.userId)
      
    };

  }

  render() {
    return (
      
        <div id="User_details">
          
          <div>
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={this.state.userModel.first_name}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={this.state.userModel.last_name}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Location" secondary={this.state.userModel.location}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Description" secondary={this.state.userModel.description}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupation" secondary={this.state.userModel.occupation}></ListItemText>
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
