import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, CardContent, CardActions, Card, CardHeader, Avatar, IconButton, Typography }from '@material-ui/core';
import Reply from '@material-ui/icons/Reply';
import UpDown from '@material-ui/icons/ThumbsUpDown';
import Up from '@material-ui/icons/ThumbUp';
import Down from '@material-ui/icons/ThumbDown';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux'
import { formatDate } from '../utils/helpers'
import { Link } from 'react-router-dom'

const styles = {
    card: {
      minWidth: 275,
      marginTop: 16,
      backgroundColor: '#eee'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    avatar: {
      backgroundColor: '#0277bd',
    }
};
  

class Post extends Component {
  toParent = (e, id) => {
    e.preventDefault()
    
    this.props.history.push(`/posts/${id}`)
  }

    render() {
        const { post, classes } = this.props

        
        return (
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    U
                  </Avatar>
                }
                title={post.title}
                subheader={`criado por: @${post.author} às  ${formatDate(post.timestamp)}`}
              />
              <CardContent>
               
              </CardContent>
              <CardActions>
                <IconButton aria-label="Reply">
                  <Reply />
                </IconButton>
                <IconButton aria-label="Up">
                  <Up color='primary'/> 
                </IconButton>
                {post.voteUp > 0 ? <Typography variant='subtitle1' component='p' align='left'>{post.voteUp}</Typography> : null}
                <IconButton aria-label="Down">
                  <Down color='error'/> 
                </IconButton>
                {post.voteDown > 0 ? <Typography variant='subtitle1' component='p' align='left'>{post.voteDown}</Typography> : null}
                <Button size="small" color="primary" >
                  <Link to={`/posts/${post.id}`}>ver tudo</Link>
                </Button>
              </CardActions>
              
            </Card>
          );
    }
}

function mapStateToProps({ posts }) {
    return {
      posts
    }
  }

export default compose(
    withStyles(styles, {
      name: 'Post',
    }),
    connect(mapStateToProps)
  )(Post);