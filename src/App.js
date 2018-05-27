import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="artist-container"></div>
        <div className="visualization-container"></div>
        <div className="album-container"></div>
        <div className="song-list-container"></div>
        <div className="controls-container"></div>
      </div>
    );
  }
}

export default App;
