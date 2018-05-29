import React, { Component } from 'react';
import './App.css';
import Album from "./components/Album";
import Artist from "./components/Artist";
import SongList from "./components/SongList";
import Visualization from './components/Visualization';
import Controls from './components/Controls';
import TrackOne from './music/1.mp3';

class App extends Component {
  constructor() {
    super();
    this.state = {
      trackList: [{
        name: 'With Me',
        source: TrackOne,
        duration: '6:59'
      },{
        name: 'Too Deep',
        source: './music/2.mp3',
        duration: '3:20'
      },{
        name: 'Try / Effortless',
        source: './music/3.mp3',
        duration: '5:33'
      },{
        name: 'Do It Well',
        source: './music/4.mp3',
        duration: '4:11'
      },{
        name: 'In + Out',
        source: './music/5.mp3',
        duration: '3:46'
      },{
        name: 'Sept. 5th',
        source: './music/6.mp3',
        duration: '3:56'
      },{
        name: 'Hallucinations',
        source: './music/7.mp3',
        duration: '4:06'
      },{
        name: 'Another One',
        source: './music/8.mp3',
        duration: '3:49'
      },{
        name: 'Angela',
        source: './music/9.mp3',
        duration: '3:49'
      },{
        name: 'The Line',
        source: './music/10.mp3',
        duration: '7:11'
      }],
      currentSong: {},
      isPlaying: false
    }
  }

  selectSong = (selectedSong) => {
    this.setState({
      currentSong : selectedSong,
      isPlaying: true
    })
  }

  playPause = () => {
    this.setState({
      isPlaying: !this.state.isPlaying
    })
  }

  nextPrev = (id) => {
    if (id === -1 && this.state.currentSong.name !== "With Me") {
      for (let i = 0; i <= this.state.trackList.length; i++) {
        if (this.state.trackList[i] === this.state.currentSong) {
          this.setState({
            currentSong: this.state.trackList[i-1]
          })
        }
      }
    }
    else if (id === 1 && this.state.currentSong.name !== "The Line") {
      for (let i = 0; i <= this.state.trackList.length; i++) {
        if (this.state.trackList[i] === this.state.currentSong) {
          this.setState({
            currentSong: this.state.trackList[i+1]
          })
        }
      }
    }
  }

  render() {
    return (
      <div style={{'height':'100%'}}>
        <audio id='x' src = {this.state.currentSong.source} />
        <div className="background-image-blur" />
        <div className="background-image-overlay" />
        <div className="player-container">
          <div className="artist-container"><Artist /></div>
          <div className="visualization-container"><Visualization /></div>
          <div className="album-container"><Album /></div>
          <div className="song-list-container"><SongList trackList = {this.state.trackList} currentSong = {this.state.currentSong} selectSong={this.selectSong}/></div>
          <div className="controls-container"><Controls currentSong = {this.state.currentSong} 
                                                        isPlaying = {this.state.isPlaying}
                                                        playPause = {this.playPause} 
                                                        nextPrev = {this.nextPrev}/></div>
        </div>
      </div>
    );
  }
}

export default App;
