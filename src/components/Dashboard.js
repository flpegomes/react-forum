
import React, { Component, Fragment } from 'react'
import { Typography, Button, Paper, Tabs, Tab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { getCategories } from '../actions/categoriesActions'
import { getPosts } from '../actions/postsActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import ListPost from './ListPost'


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

function TabContainer({ children, dir }) {
  return (
    <Typography variant="subtitle1" component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}


class Dashboard extends Component {

  componentDidMount() {
    this.props.dispatch(getCategories())
    this.props.dispatch(getPosts())
  }

  state = {
    value: 'all',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, categories } = this.props;
    const { value } = this.state
    return (
      <Fragment>        
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
            <Tab label='TODAS AS POSTAGEM' value='all' />
            {categories.map(({name, path}) => (
              <Tab key={name} label={name} value={name}/> 
            ))}
            
          </Tabs>
          
          {value === 'all' && <TabContainer><ListPost category='all' /></TabContainer>}

          {categories.map(({name, path}) => (
            value === name && (
            <TabContainer key={name}><ListPost category={name}/></TabContainer> )
          ))}
          
        </Paper>
      </Fragment>

        

    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories
  }
}

export default compose(
  withStyles(styles, {
    name: 'Dashboard',
  }),
  connect(mapStateToProps)
)(Dashboard);