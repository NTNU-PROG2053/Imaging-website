import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core';
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
      <div>
        {window.cs142models.photoOfUserModel(this.props.match.params.userId).map((photo) =>
          <div key={photo.userId} className="imageDiv">
            <img src={`../images/${photo.file_name}`} style={{
              width: '50%',
            }} />
            <List className="flexContainer">
              <ListItem>
                <ListItemText primary={"Date: " + photo.date_time} />
              </ListItem>
            </List>
          
            <List>
              {photo.comments.map((comment) =>
                <div key={comments._id} className="commentDiv">
                  <ListItem>
                    <ListItemText primary={comment.comments} />
                  </ListItem>
                </div>

              )};
            </List>
            

          </div>
        )}
      </div>

    );
  }
}

export default UserPhotos;
