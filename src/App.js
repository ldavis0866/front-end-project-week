import React, { Component } from 'react';
import LeftNav from './components/LeftNav/LeftNav.js';
import MainContent from './components/MainContent/MainContent';



class App extends Component {
  render() {
    return (
      <div className='container'>
        <LeftNav/>
        <MainContent/>
      </div>
    );
  }
}

export default App;