import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  },
  modalFooter: {
    marginTop: '20px',
    textAlign: 'right',
  }
});

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.defaultUser,
      validates: {}
    };
    this.defaultUser = { 
      name: '',
      username: '',
      email: '',
    };
    this.createUser = this.createUser.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  createUser() {
    const newUser = { ...this.state };
    if (newUser.username && newUser.email) {
      this.props.onCreate(newUser);
      this.setState({ ...this.defaultUser });
    }
  }

  handleFieldChange(name) {
    return (event) => {
      this.setState({ [name]: event.target.value });
    }
  }

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
                value={this.state.name}
                onChange={this.handleFieldChange('name')}
                margin="normal"
                fullWidth
                required
              />
              <TextField
                id="username"
                label="Username"
                className={classes.textField}
                value={this.state.username}
                onChange={this.handleFieldChange('username')}
                margin="normal"
                fullWidth
                required
              />
              <TextField
                id="email"
                label="Email"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleFieldChange('email')}
                margin="normal"
                fullWidth
                required
              />
            </form>
          </div>
          <div className={classes.modalFooter}>
            <Button color="primary" onClick={this.createUser}>
              Create
            </Button>
            <Button color="default" onClick={this.props.onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

ModalUser.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired
};

export default withStyles(styles)(ModalUser);