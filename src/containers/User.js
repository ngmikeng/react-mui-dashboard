import React, { Component } from 'react';
import SimpleTable from '../components/SimpleTable';
import ModalUser from '../components/ModalUser';
import { Paper, Button } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isOpenCreateModal: false,
      userEditing: null,
      currentIndex: null
    };
    this.handleOpenCreateModal = this.handleOpenCreateModal.bind(this);
    this.handleCloseCreateModal = this.handleCloseCreateModal.bind(this);
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState({
          data: result
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleOpenCreateModal(user, index) {
    this.setState({
      isOpenCreateModal: true,
      userEditing: user,
      currentIndex: index
    });
  }

  handleCloseCreateModal() {
    this.setState({
      isOpenCreateModal: false
    });
  }

  handleCreateUser(user) {
    if (this.state.currentIndex >= 0 && this.state.userEditing) {
      console.log(this.state.currentIndex);
      console.log(this.state.userEditing);
    } else {
      user.id = this.state.data.length + 1;
      this.setState({
        data: [user, ...this.state.data],
        isOpenCreateModal: false
      });
    }
  }

  handleDeleteUser(user, index) {
    console.log(user);
    console.log(index);
    let isConfirm = window.confirm(`Are you sure you want to delete this user ?`);
    if (isConfirm) {
      let users = [...this.state.data];
      users.splice(index, 1);
      this.setState({
        data: users
      });
    }
  }

  render() {
    const headers = ['ID', 'Name', 'Username', 'Email', 'Phone', 'Website'];
    const dataKeys = ['id', 'name', 'username', 'email', 'phone', 'website'];

    return (
      <div className="User">
        <h2>
          Users
        </h2>
        <Paper>
          <Button variant="contained" color="primary" onClick={this.handleOpenCreateModal}>
            <PersonAddIcon/> Create
          </Button>
        </Paper>
        <SimpleTable headers={headers} dataKeys={dataKeys} dataRows={this.state.data} onDelete={this.handleDeleteUser} onEdit={this.handleOpenCreateModal} />
        <ModalUser open={this.state.isOpenCreateModal}
          user={this.state.userEditing}
          onClose={this.handleCloseCreateModal} 
          onCreate={this.handleCreateUser} />
      </div>
    );
  }
}

export default User;