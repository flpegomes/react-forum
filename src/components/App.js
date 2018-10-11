import React, { Component } from 'react';
import '../App.css';
import ToolbarMenu from './ToolbarMenu'
import Dashboard from './Dashboard'
import PostPage from './PostPage'
//import Category from './Category'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <LoadingBar />
        <ToolbarMenu />
        {this.props.loading === true
            ? null
            : <div>
                <Route path='/posts/:id' component={PostPage} />
                <Route path='/' exact    component={Dashboard} />
                <Route path='/:category' component={Dashboard} />
                
              </div>}
      </div>

      </Router>
        
    );
  }
}

function mapsStateToProps ({ categories }) {
  return {
    loading: categories === null
  }
}

export default connect(mapsStateToProps)(App)
