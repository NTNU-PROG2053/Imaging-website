import React from 'react';
import {
  Card,
  CardMedia,
  Typography,
  CardHeader,
} from '@material-ui/core';
import Comment from '../comment/Comment';
import './userPhotos.css';


/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div className="userPhotosContainer">
        {window.cs142models.photoOfUserModel(this.props.match.params.userId).map((photo) =>
          <Card key={photo._id} className="imageDiv">
            <CardHeader title={photo.file_name} subheader={photo.date_time}></CardHeader>
            <CardMedia component="img" image={`../images/${photo.file_name}`} alt={"Could not display image"} />
            <Typography variant="h5">Comments</Typography>
            {
              photo.comments ? (
                photo.comments.map(comment => (
                  <Comment key={comment._id} text={comment.comment} user={comment.user} date={comment.date_time}/>
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
