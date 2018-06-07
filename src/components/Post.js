import React, { Component } from 'react';
import SimpleTable from './SimpleTable';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
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
    const headers = ['ID', 'Title', 'Content'];
    const dataKeys = ['id', 'title', 'body'];

    return (
      <div className="Post">
        <h2>
          Posts
        </h2>
        <SimpleTable headers={headers} dataKeys={dataKeys} dataRows={this.state.data} />
      </div>
    );
  }
}

export default Post;