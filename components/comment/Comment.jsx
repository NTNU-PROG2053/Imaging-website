import React from 'react';
import {
    Typography,
    Card
} from '@material-ui/core';
import {
  Link
} from 'react-router-dom';
import './Comment.css'

class Comment extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <Card className="userComment">
            <Typography component={Link} to={`/users/${this.props.user._id}`}>{this.props.user.first_name + " " + this.props.user.last_name}</Typography>
            <Typography>{this.props.text}</Typography>
            <Typography>{this.props.date}</Typography>
            </Card>
        )
    }
}

export default Comment;