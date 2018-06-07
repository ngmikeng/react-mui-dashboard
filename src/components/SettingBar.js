import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

class SettingBar extends Component {
  render() {
    const { anchor, onChangeAnchor } = this.props;

    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <TextField
            id="persistent-anchor"
            select
            label="Anchor"
            value={anchor}
            onChange={onChangeAnchor}
            margin="normal"
          >
            <MenuItem value="left">left</MenuItem>
            <MenuItem value="right">right</MenuItem>
          </TextField>
        </Toolbar>
      </AppBar>
    );
  }
}

SettingBar.propTypes = {
  anchor: PropTypes.string.isRequired,
  onChangeAnchor: PropTypes.func.isRequired
};

export default SettingBar;