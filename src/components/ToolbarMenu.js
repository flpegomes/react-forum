
import React, { Component } from 'react'
import { Toolbar, AppBar, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { compose } from 'redux'


const styles = {
  title: {
    marginRight: 10,
    flexGrow: 1,
  }
};


class ToolbarMenu extends Component {

  render() {
    const { classes } = this.props;
    return (
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component="title" className={classes.title} color="inherit" >
                READABLE 
            </Typography>
            
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
    );
  }
}

export default compose(
  withStyles(styles, {
    name: 'ToolbarMenu',
  }),
  connect()
)(ToolbarMenu);