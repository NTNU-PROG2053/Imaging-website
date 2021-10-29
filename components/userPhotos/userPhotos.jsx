import React from 'react';
import {
  Card,
  Typography
} from '@material-ui/core';
import './userPhotos.css';
import Image from "material-ui-image";


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
          <Card variant="outlined" key={photo._id} style={{
              height: '50%',
              width: '50%'
          }}>
            <Image src={`../images/${photo.file_name}`} />
          </Card>
        )}
      </div>

    );
  }
}

export default UserPhotos;
