import React, { Component } from 'react';
import './App.css';
import Album from "./components/Album";
import Artist from "./components/Artist";
import SongList from "./components/SongList";
import Visualization from './components/Visualization';
import Controls from './components/Controls';

class App extends Component {
  render() {
    return (
      <div>
        <div className="artist-container"><Artist /></div>
        <div className="visualization-container"><Visualization /></div>
        <div className="album-container"><Album /></div>
        <div className="song-list-container"><SongList /></div>
        <div className="controls-container"><Controls /></div>
      </div>
    );
  }
}

export default App;
