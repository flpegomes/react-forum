
import React, { Component, Fragment } from 'react'
import { Typography, Button, Paper, Tabs, Tab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { getCategories } from '../actions/categoriesActions'
import { getPosts } from '../actions/postsActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import ListPost from './ListPost'
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

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


class Category extends Component {

  componentDidMount() {
    this.props.dispatch(getCategories())
    this.props.dispatch(getPosts())
  }

  render() {
    const { classes, categories, category } = this.props;
    console.log(category)
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
            value={this.props.category}
            //onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            className={classes.tab}
          >
            <Tab key='all' label='TODAS AS POSTAGENS' value='all' component={Link} to="/" />

            {categories.map(({name, path}) => (
                <Tab key={name} label={name} value={name} component={Link} to={`/${path}`}/> 
            ))}
            
          </Tabs>
          
          {categories.map(({name, path}) => (
            category === name && (
            <TabContainer key={path}><ListPost category={name} /></TabContainer> )
          ))}
          
        </Paper>
      </Fragment>

        

    );
  }
}

function mapStateToProps({ categories }, props) {
  const { category } = props.match.params

  return {
    category: category === undefined ? 'all' : category,
    categories
  }
}

export default compose(
  withStyles(styles, {
    name: 'Dashboard',
  }),
  withRouter,
  connect(mapStateToProps)
)(Category);