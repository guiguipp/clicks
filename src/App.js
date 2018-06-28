import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <p>My app</p>
      </div>
    );
  }
}

export default App;
