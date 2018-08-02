import React, { Component } from 'react';
import './App.css';

import Main from './components/main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title text-warning">LCD Refactor</h1>
        </header>
        <div className="App-intro">
          <Main />
        </div>
        <footer>
          <h3 >
          &copy; By Julian Valencia
          </h3>
        </footer>
      </div>
    );
  }
}

export default App;