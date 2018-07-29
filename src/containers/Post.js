import React, { Component } from 'react';
import SimpleTable from '../components/SimpleTable';
import ModalPost from '../components/ModalPost';
import { Paper, Button } from '@material-ui/core';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isOpenCreateModal: false,
      postEditing: null,
      currentIndex: null
    };
    this.handleOpenPostModal = this.handleOpenPostModal.bind(this);
    this.handleCloseCreateModal = this.handleCloseCreateModal.bind(this);
    this.handleSubmitPost = this.handleSubmitPost.bind(this);
    this.handleDeletePost = this.handleDeletePost.bind(this);
    this.handleOpenPostModal = this.handleOpenPostModal.bind(this);
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

  handleOpenPostModal(post, index) {
    this.setState({
      isOpenCreateModal: true,
      postEditing: post,
      currentIndex: index
    });
  }

  handleCloseCreateModal() {
    this.setState({
      isOpenCreateModal: false
    });
  }

  handleSubmitPost(post) {
    if (this.state.currentIndex >= 0 && this.state.postEditing) {
      const data = [...this.state.data];
      data[this.state.currentIndex] = post;
      setTimeout(() => {
        this.setState({
          data: data,
          isOpenCreateModal: false
        });
      }, 200);
    } else {
      post.id = this.state.data.length + 1;
      this.setState({
        data: [post, ...this.state.data],
        isOpenCreateModal: false
      });
    }
  }

  handleDeletePost(post, index) {
    let isConfirm = window.confirm(`Are you sure you want to delete this post ?`);
    if (isConfirm) {
      let posts = [...this.state.data];
      posts.splice(index, 1);
      this.setState({
        data: posts
      });
    }
  }

  render() {
    const headers = ['ID', 'Title', 'Content'];
    const dataKeys = ['id', 'title', 'body'];

    return (
      <div className="Post">
        <h2>
          Posts
        </h2>
        <Paper>
          <Button variant="contained" color="primary" onClick={(e) => this.handleOpenPostModal()}>
            Create
          </Button>
        </Paper>
        <SimpleTable headers={headers} dataKeys={dataKeys} dataRows={this.state.data} onDelete={this.handleDeletePost} onEdit={this.handleOpenPostModal} />
        <ModalPost open={this.state.isOpenCreateModal}
          post={this.state.postEditing}
          onClose={this.handleCloseCreateModal}
          onSubmitForm={this.handleSubmitPost} />
      </div>
    );
  }
}

export default Post;