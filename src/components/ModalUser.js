import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, TextField, Button, withStyles } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { Formik } from 'formik';

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
    width: '100%'
  }
});

class ModalUser extends Component {
  constructor(props) {
    super(props);

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleValidate = this.handleValidate.bind(this);
    this.handleRenderForm = this.handleRenderForm.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleFieldChange(name) {
    return (event) => {
      this.setState({ [name]: event.target.value });
    }
  }

  handleValidate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.username) {
      errors.username = 'Required';
    }
    if (!values.name) {
      errors.name = 'Required';
    }
    return errors;
  }

  handleSubmitForm(values, action) {
    const newUser = { ...values };
    this.props.onSubmitForm(newUser);
  }

  handleRenderForm({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  }) {
    const { classes, onClose  } = this.props;

    return (
      <form className={classes.formContainer} onSubmit={handleSubmit} noValidate>
        <TextField
          name="name"
          label="Name"
          className={classes.textField}
          value={values.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
          error={!!errors.name}
        />
        { touched.name && errors.name && <Typography variant="caption" color="error">{errors.name}</Typography> }
        <TextField
          name="username"
          label="Username"
          className={classes.textField}
          value={values.username}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
          error={!!errors.username}
        />
        { touched.username && errors.username && <Typography variant="caption" color="error">{errors.username}</Typography> }
        <TextField
          name="email"
          label="Email"
          className={classes.textField}
          value={values.email}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
          error={!!errors.email}
        />
        { touched.email && errors.email && <Typography variant="caption" color="error">{errors.email}</Typography> }
        <div className={classes.modalFooter}>
          <Button type="submit" color="primary" disabled={isSubmitting}>
            { this.props.user ? "Save" : "Create" }
          </Button>
          <Button color="default" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    )
  }

  render() {
    const { classes } = this.props;
    let userData = {
      name: '',
      username: '',
      email: ''
    };

    if (this.props.user && this.props.user.id) {
      userData = { ...this.props.user };
    }

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
            <Formik initialValues={userData}
              validate={this.handleValidate}
              onSubmit={this.handleSubmitForm}
              render={this.handleRenderForm} 
            />
          </div>
        </div>
      </Modal>
    );
  }
}

ModalUser.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired
};

export default withStyles(styles)(ModalUser);