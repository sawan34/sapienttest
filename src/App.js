import React, { Component } from 'react';
import Container from './Components/Container'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>ATM Money Dispenser</h1>
        </header>
        <Container />
      </div>
    );
  }
}

export default App;
