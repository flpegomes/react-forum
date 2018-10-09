
import React, { Component, Fragment } from 'react'
import { Toolbar, AppBar, Typography, Button, Paper, Tabs, Tab, Badge } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';



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
    backgroundColor: '#ddd',
    flexGrow: 1,
  },
  button: {
    float: 'right',
    marginRight: 16,
  },
  tab: {
    backgroundColor:'#ddd',
  },
  padding: {
    padding: `0 15px`,
  },
  tabContainer: {
    backgroundColor: '#fff'
  }
};

function TabContainer({ children, dir }) {
  return (
    <Typography variant="subtitle1" component="div" style={{ padding: 8 * 3 }}>
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
            <Typography variant='h6' component="title" className={classes.title} color="inherit" >
                READABLE 
            </Typography>
            
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        
        <Paper className={classes.paper}>
          <Typography variant='h6' align='left' className={classes.titleTab}  >
            CATEGORIAS
            <Button variant="contained" color='primary' className={classes.button}>
              NOVA POSTAGEM
            </Button>
          </Typography>
          
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            className={classes.tab}
            
          >
            <Tab label=
              {this.state.value === 0 ? (
                'TODAS AS POSTAGENS' 
              )
              : (
              <Badge className={classes.padding} color="primary" badgeContent={4}>
                  TODAS AS POSTAGENS
              </Badge>
              )}
            />
            <Tab label=
              {this.state.value === 1 ? (
                'REACT' 
              )
              : (
              <Badge className={classes.padding} color="primary" badgeContent={1}>
                  REACT
              </Badge> 
              )}
            />
            <Tab label=
              {this.state.value === 2 ? (
                'REDUX' 
              )
              : (
              <Badge className={classes.padding} color="primary" badgeContent={7}>
                  REDUX
              </Badge> 
              )} 
            />
            <Tab label=
            {this.state.value === 3 ? (
                'UDACITY' 
              )
              : (
              <Badge className={classes.padding} color="primary" badgeContent={2}>
                  UDACITY
              </Badge> 
              )} 
            />
          </Tabs>
          {value === 0 && <TabContainer className={classes.tabContainer}>Item One</TabContainer>}
          {value === 1 && <TabContainer>Item Two</TabContainer>}
          {value === 2 && <TabContainer>Item Three</TabContainer>}
          {value === 3 && <TabContainer>Item Three</TabContainer>}
        </Paper>
        
        <Paper className={classes.paper}>
        <Typography variant="h6" align='left' className={classes.titleTab}  >
            POSTAGENS MAIS DISCUTIDAS
        </Typography>
        </Paper>
      </Fragment>
      

    );
  }
}

export default withStyles(styles)(ToolbarMenu);