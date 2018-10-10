import React, { Component } from 'react';
import '../App.css';
import ToolbarMenu from './ToolbarMenu'
import Dashboard from './Dashboard'



class App extends Component {
  render() {
    return (
      <div>
        <ToolbarMenu />
        <Dashboard />
      </div>
        
    );
  }
}

export default App;
