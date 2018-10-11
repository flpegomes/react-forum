import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'


class ListPost extends Component {
    render() {
        const { category, posts } = this.props

        return (
            <div>
                {category === 'all' && (
                    posts.map((post) => (
                      <Post key={post.id} post={post}/>
                    ))
                )}

                {posts.filter((post) => post.category === category).map((post) => (
                    <Post key={post.id} post={post}/>
                ))}
            </div>
        )
    }
}

function mapStateToProps({ posts }) {

    return {
      posts
    }
  }

export default connect(mapStateToProps)(ListPost)