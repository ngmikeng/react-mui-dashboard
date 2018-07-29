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

class ModalPost extends Component {
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
    if (!values.title) {
      errors.title = 'Required';
    }
    if (!values.body) {
      errors.body = 'Required';
    }
    return errors;
  }

  handleSubmitForm(values, action) {
    const newPost = { ...values };
    this.props.onSubmitForm(newPost);
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
          name="title"
          label="Title"
          className={classes.textField}
          value={values.title}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
          error={!!errors.title}
        />
        { touched.title && errors.title && <Typography variant="caption" color="error">{errors.title}</Typography> }
        <TextField
          name="body"
          label="Content"
          className={classes.textField}
          value={values.body}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
          error={!!errors.body}
        />
        { touched.body && errors.body && <Typography variant="caption" color="error">{errors.body}</Typography> }
        <div className={classes.modalFooter}>
          <Button type="submit" color="primary" disabled={isSubmitting}>
            { this.props.post ? "Save" : "Create" }
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
    let postData = {
      title: '',
      body: ''
    };

    if (this.props.post && this.props.post.id) {
      postData = { ...this.props.post };
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
            Create Post
          </Typography>
          <div className="modalBody">
            <Formik initialValues={postData}
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

ModalPost.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired
};

export default withStyles(styles)(ModalPost);