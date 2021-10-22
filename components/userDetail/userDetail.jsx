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
      <Typography variant="body1">
        <div id="User_details">
          <ul>
            <li>First name: {this.props.match.params.first_name} </li>
            <li>Last name: {this.props.match.params.last_name}</li>
            <li>Location: {this.props.match.params.location}</li>
            <li>Description: {this.props.match.params.description}</li>
            <li>Occupation: {this.props.match.param.occupation}</li>
          </ul>
        </div>
        This should be the UserDetail view of the PhotoShare app. Since
        it is invoked from React Router the params from the route will be
        in property match. So this should show details of user:
        {this.props.match.params.userId}. You can fetch the model for the
        user from window.cs142models.userModel(userId).
      </Typography>
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
