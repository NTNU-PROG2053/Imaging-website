import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
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
