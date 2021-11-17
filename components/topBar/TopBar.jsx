import React from 'react';
import {
  AppBar, Toolbar, Typography, Box
} from '@material-ui/core';
import './TopBar.css';
import fetchModel from '../../lib/fetchModelData';

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userModel: {},
      display: "",
      currentPage: "",
    }
  }

  componentDidMount() {
    if (this.props.match != undefined) {
      fetchModel("http://localhost:3000/user/" + this.props.match.params.userId)
        .then(data => {
          this.setState({ userModel: data.data })
          this.setState({ currentPage: this.props.match.path });
          this.updateDisplay();
        })
        .catch(err => console.err(err));
    } else {
      this.setState({display: "Startpage"})
    }
  }


  componentDidUpdate(previousProps) {
    if (previousProps !== this.props) {
      fetchModel("http://localhost:3000/user/" + this.props.match.params.userId)
        .then(data => {
          this.setState({ userModel: data.data })
          this.setState({ currentPage: this.props.match.path });
          this.updateDisplay();
        })
        .catch(err => console.err(err));
    }
  }

  updateDisplay() {
    if (this.state.currentPage.startsWith("/user")) {
      this.setState({ display: this.state.userModel.first_name + " " + this.state.userModel.last_name })
    } else if (this.state.currentPage.startsWith("/photos")) {
      this.setState({ display: "Photos of " + this.state.userModel.first_name + " " + this.state.userModel.last_name })
    }
  }

  render() {
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Box display='flex' flexGrow={1}>
            <Typography variant="h5" color="inherit">
              Group 13
            </Typography>
          </Box>
          <Typography variant="h5" color="inherit">
            {this.state.display}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
