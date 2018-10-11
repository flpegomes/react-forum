
import React, { Component, Fragment } from 'react'
import { Typography, Button, Paper, Tabs, Tab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { getCategories } from '../actions/categoriesActions'
import { getPosts } from '../actions/postsActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link, withRouter } from 'react-router-dom'



const styles = {
  paper: {
    flexGrow: 1,
    margin: 16,
  },
  title: {
    marginRight: 10,
    flexGrow: 1,
  },
  titleTab: {
    padding: 16,
    backgroundColor: '#eeeeee',
    flexGrow: 1,
  },
  button: {
    float: 'right',
    marginRight: 16,
  },
  tab: {
    backgroundColor:'#eee',
  },
  padding: {
    padding: `0 15px`,
  },
  tabContainer: {
    backgroundColor: '#fff'
  }
};

class PostPage extends Component {

  render() {
    const { classes, post } = this.props;
    console.log(post)
    return (
        <div>
            <Paper className={classes.paper}>
                <Typography variant='h6' align='left' className={classes.titleTab}  >
                    aas
                </Typography>
            </Paper>
        </div>
        
    );
  }
}

function mapStateToProps({ posts }, props) {
    const { id } = props.match.params
    const post = posts[id]
    return {
        post
    }
}

export default compose(
  withStyles(styles, {
    name: 'PostPage',
  }),
  connect(mapStateToProps)
)(PostPage);