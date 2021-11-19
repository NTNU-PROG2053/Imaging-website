import React from 'react';
import {
  Card,
  CardMedia,
  Typography,
  CardHeader,
} from '@material-ui/core';
import Comment from '../comment/Comment';
import fetchModel from '../../lib/fetchModelData';
import './userPhotos.css';


/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoOfUserModel: [],
    }

  }

  componentDidMount() {
    fetchModel("http://localhost:3000/photosOfUser/" + this.props.match.params.userId)
      .then(data => {this.setState({photoOfUserModel: data.data})})
      .catch(err => console.err(err));
  }


  render() {
    return (
      <div className="userPhotosContainer">
        {this.state.photoOfUserModel.map((photo) =>
          <Card key={photo._id} className="imageDiv">
            <CardHeader title={photo.file_name} subheader={photo.date_time}></CardHeader>
            <CardMedia component="img" image={`../images/${photo.file_name}`} alt={"Could not display image"} />
            <Typography variant="h5">Comments</Typography>
            {
              photo.comments.length !== 0 ? (
                photo.comments.map(comment => (
                  <Comment key={comment._id} text={comment.comment} user_id={comment.user_id} date={comment.date_time}/>
                )
                )) : <Typography>No comments yet.</Typography>
            }
          </Card>
        )}
      </div>
    );
  }
}

export default UserPhotos;
