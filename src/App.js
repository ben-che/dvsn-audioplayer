import React, { Component } from 'react';
import './App.css';
import Album from "./components/Album";
import Artist from "./components/Artist";
import SongList from "./components/SongList";
import Visualization from './components/Visualization';
import Controls from './components/Controls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      trackList: [{
        name: 'With Me',
        source: 'placeholder',
        duration: '6:59'
      },{
        name: 'Too Deep',
        source: 'placeholder',
        duration: '3:20'
      },{
        name: 'Try / Effortless',
        source: 'placeholder',
        duration: '5:33'
      },{
        name: 'Do It Well',
        source: 'placeholder',
        duration: '4:11'
      },{
        name: 'In + Out',
        source: 'placeholder',
        duration: '3:46'
      },{
        name: 'Sept. 5th',
        source: 'placeholder',
        duration: '3:56'
      },{
        name: 'Hallucinations',
        source: 'placeholder',
        duration: '4:06'
      },{
        name: 'Another One',
        source: 'placeholder',
        duration: '3:49'
      },{
        name: 'Angela',
        source: 'placeholder',
        duration: '3:49'
      },{
        name: 'The Line',
        source: 'placeholder',
        duration: '7:11'
      }],
      currentSong: {}
    }
  }

  selectSong = (selectedSong) => {
    this.setState({
      currentSong : selectedSong
    })
  }

  render() {
    return (
      <div style={{'height':'100%'}}>
        <div className="background-image-blur" />
        <div className="player-container">
          <div className="artist-container"><Artist /></div>
          <div className="visualization-container"><Visualization /></div>
          <div className="album-container"><Album /></div>
          <div className="song-list-container"><SongList trackList = {this.state.trackList} selectSong={this.selectSong}/></div>
          <div className="controls-container"><Controls currentSong = {this.state.currentSong}/></div>
        </div>
      </div>
    );
  }
}

export default App;
