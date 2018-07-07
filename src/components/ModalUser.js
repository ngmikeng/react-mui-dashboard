import React, { Component } from 'react';
import { Typography, TextField, Button, withStyles } from '@material-ui/core';
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
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  }
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
          <div className="modalBody">
            <form className={classes.formContainer}>
              <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.props.name}
                margin="normal"
                fullWidth
              />
              <TextField
                id="username"
                label="Username"
                className={classes.textField}
                value={this.props.username}
                margin="normal"
                fullWidth
              />
            </form>
          </div>
          <div className="modalFooter">
            <Button color="primary" onClick={this.props.onSubmit}>
              Create
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default withStyles(styles)(ModalUser);