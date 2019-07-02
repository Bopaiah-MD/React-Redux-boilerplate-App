import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions';


class Posts extends Component {

  /* state = {
    posts:[]
  } */

  /* componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => 
    this.setState({
      posts:data
    }));
  } */

  /*state and fetch we are doing in postActions.js hence commenting */

  componentDidMount() {
    console.log(" 1. componentWillMount Posts file")
    this.props.fetchPosts();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.newPost) {

      this.props.posts.unshift(nextProps.newPost)

    }
    return true;
  }

  render() {

    const postItem = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        {postItem}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts);
