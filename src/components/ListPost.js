import React, { Component } from 'react'
import { connect } from 'react-redux'


class ListPost extends Component {
    render() {
        const { category, posts } = this.props

        return (
            <div>
                {category === 'all' && (
                    posts.map((posts) => (
                        <div key={posts.id}>{posts.title}</div>
                    ))
                )}

                {posts.filter((posts) => posts.category === category).map((posts) => (
                    <div key={posts.id}>{posts.title}</div>
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