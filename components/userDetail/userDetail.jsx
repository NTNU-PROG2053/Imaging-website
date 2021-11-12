import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Button
} from '@material-ui/core';
import './userDetail.css';
import { Link } from 'react-router-dom'
import fetchModel from '../../lib/fetchModelData';

/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userModel: {},
    };

  }

  componentDidMount() {
    fetchModel("http://localhost:3000/user/" + this.props.match.params.userId)
      .then(data => {this.setState({userModel: data.data})})
      .catch(err => console.err(err));
  }

  componentDidUpdate(previousProps) {
    if (previousProps.match.params.userId !== this.props.match.params.userId) {
      fetchModel("http://localhost:3000/user/" + this.props.match.params.userId)
        .then(data => {this.setState({userModel: data.data})})
        .catch(err => console.err(err));
    }

  }


  render() {
    return (
      <div id="User_details">
        <div>
          <List>
            <ListItem>
              <ListItemText disableTypography primary={this.state.userModel.first_name + " " + this.state.userModel.last_name } ></ListItemText>
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
            <Button variant="contained" component={Link} to={`/photos/${this.props.match.params.userId}`} >User Photos</Button>
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
