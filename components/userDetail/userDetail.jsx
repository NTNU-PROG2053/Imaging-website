import React from 'react';
import {
  Typography
} from '@material-ui/core';
import './userDetail.css';


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
          <List>
            <ListItem>
              <ListItemText primary="First Name: " secondary={this.props.match.params.first_name}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="">
              </ListItemText>
            </ListItem>

          </List>
          <ul>
            <li>{this.props.match.params.first_name} </li>
            <li>Last name: {this.props.match.params.last_name}</li>
            <li>Location: {this.props.match.params.location}</li>
            <li>Description: {this.props.match.params.description}</li>
            <li>Occupation: {this.props.match.param.occupation}</li>
          </ul>
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
