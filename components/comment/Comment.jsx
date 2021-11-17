import React from 'react';
import {
    Typography,
    Card
} from '@material-ui/core';
import {
  Link
} from 'react-router-dom';
import './Comment.css'
import fetchModel from '../../lib/fetchModelData';

class Comment extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            userModel: {}
        }
    }

  componentDidMount() {
    fetchModel("http://localhost:3000/user/" + this.props.user_id)
      .then(data => {this.setState({userModel: data.data})})
      .catch(err => console.err(err));
  }

    render() {
        return(
            <Card className="userComment">
            <Typography component={Link} to={`/users/${this.state.userModel._id}`}>{this.state.userModel.first_name + " " + this.state.userModel.last_name}</Typography>
            <Typography>{this.props.text}</Typography>
            <Typography>{this.props.date}</Typography>
            </Card>
        )
    }
}

export default Comment;