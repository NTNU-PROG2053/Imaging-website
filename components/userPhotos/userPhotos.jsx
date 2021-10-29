import React from 'react';
import {
  Card,
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
          <div className="imageDiv">
            <img src={`../images/${photo.file_name}`} style={{
              width: '50%',
            }} />
          </div>
        )}
      </div>

    );
  }
}

export default UserPhotos;
