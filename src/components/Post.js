import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, CardContent, CardActions, Card }from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux'

import Typography from '@material-ui/core/Typography';

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
};
  

class Post extends Component {
    render() {
        const { category, post, classes } = this.props

        return (
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="subtitle1" className={classes.title} color="textSecondary" >
                    @{post.author}
                </Typography>
                <Typography variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" className={classes.pos} color="textSecondary">
                  comentarios: {post.commentCount} | votescore: {post.voteScore}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  {post.body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
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