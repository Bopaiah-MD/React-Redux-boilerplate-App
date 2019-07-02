import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
    state = {
        title: '',
        body: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    /* we are trting to do a POST here below using fetch api 
    so in console we will get id with the title and body
    */

    onSubmit = (e) => {
        console.log("onSubmit cald")
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.createPost(post);

        /*fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(res => res.json()).then((data => console.log(data)))
        */

    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label><br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />

                    </div>
                    <div>
                        <label>Body:</label><br />
                        <textarea name="body" onChange={this.onChange} value={this.state.body} />

                    </div>
                    <br />
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     posts:state.posts.items
//   })

export default connect(null, { createPost })(PostForm);