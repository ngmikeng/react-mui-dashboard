import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

class ModalUser extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <div className={classes.paper}>
          <Typography variant="title">
            Create User
          </Typography>
          <Typography variant="subheading">
            WIP Create User
          </Typography>
        </div>
      </Modal>
    );
  }
}

export default withStyles(styles)(ModalUser);