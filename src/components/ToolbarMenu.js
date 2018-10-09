
import React, { Component, Fragment } from 'react'
import { Toolbar, AppBar, Typography, Button, Paper, Tabs, Tab } from '@material-ui/core'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
    margin: 16
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    marginRight: 10
  },
  titleTab: {
    margin: 16
  }
};

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}


class ToolbarMenu extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state
    return (
      <Fragment>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant="h5" component="h2" className={classes.title}>
                READABLE 
            </Typography>
            <Typography variant="subtitle1" className={classes.grow} >
              por felipe gomes
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Typography variant="h5" align='center' className={classes.titleTab}  >
          Categorias
        </Typography>
        <Paper className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="React" />
            <Tab label="Redux" />
            <Tab label="Udacity" />
          </Tabs>
          {value === 0 && <TabContainer>Item One</TabContainer>}
          {value === 1 && <TabContainer>Item Two</TabContainer>}
          {value === 2 && <TabContainer>Item Three</TabContainer>}
        </Paper>
        
      </Fragment>
      

    );
  }
}

export default withStyles(styles)(ToolbarMenu);