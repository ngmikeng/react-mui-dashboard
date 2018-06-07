import React, { Component } from 'react';
import SimpleTable from './SimpleTable';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
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

  render() {
    const headers = ['ID', 'Name', 'Username', 'Email', 'Phone', 'Website'];
    const dataKeys = ['id', 'name', 'username', 'email', 'phone', 'website'];

    return (
      <div className="User">
        <h2>
          Users
        </h2>
        <SimpleTable headers={headers} dataKeys={dataKeys} dataRows={this.state.data} />
      </div>
    );
  }
}

export default User;