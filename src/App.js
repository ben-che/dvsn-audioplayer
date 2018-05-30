import React, { Component } from 'react';
import './App.css';
import Album from "./components/Album";
import Artist from "./components/Artist";
import SongList from "./components/SongList";
import Visualization from './components/Visualization';
import Controls from './components/Controls';
import TrackOne from './music/1.mp3';
import TrackTwo from './music/2.mp3';
import TrackThree from './music/3.mp3';
import TrackFour from './music/4.mp3';
import TrackFive from './music/5.mp3';
import TrackSix from './music/6.mp3';
import TrackSeven from './music/7.mp3';
import TrackEight from './music/8.mp3';
import TrackNine from './music/9.mp3';
import TrackTen from './music/10.mp3';


class App extends Component {
  constructor() {
    super();
    this.audioRef = React.createRef();
    this.state = {
      trackList: [{
        name: 'With Me',
        source: TrackOne,
        duration: '6:59'
      },{
        name: 'Too Deep',
        source: TrackTwo,
        duration: '3:20'
      },{
        name: 'Try / Effortless',
        source: TrackThree,
        duration: '5:33'
      },{
        name: 'Do It Well',
        source: TrackFour,
        duration: '4:11'
      },{
        name: 'In + Out',
        source: TrackFive,
        duration: '3:46'
      },{
        name: 'Sept. 5th',
        source: TrackSix,
        duration: '3:56'
      },{
        name: 'Hallucinations',
        source: TrackSeven,
        duration: '4:06'
      },{
        name: 'Another One',
        source: TrackEight,
        duration: '3:49'
      },{
        name: 'Angela',
        source: TrackNine,
        duration: '3:49'
      },{
        name: 'The Line',
        source: TrackTen,
        duration: '7:11'
      }],
      currentSong: {},
      currentTime: 0,
      isPlaying: false
    }
  }

  componentDidUpdate = () => {
    if (this.state.isPlaying) {
      this.audioRef.current.play();
    }
    else {
      this.audioRef.current.pause();
    }
  }

  selectSong = (selectedSong) => {
    this.setState({
      currentSong : selectedSong,
      isPlaying: true
    })
  }

  playPause = () => {
    if (this.state.currentSong.name !== undefined) {
      this.setState({
        isPlaying: !this.state.isPlaying
      })
    }
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

  componentDidMount = () => {
    const moment = require('moment');
    setInterval( () => {
      console.log(moment().minutes(0).second(Math.ceil(this.audioRef.current.currentTime)).format("mm ss"))
      this.setState({
        currentTime : moment().minutes(0).second(Math.ceil(this.audioRef.current.currentTime)).format("m ss")
      })
    }, 1000);
  }

  render() {
  
    return (
      <div className="app-wrap-container" >
        <audio ref={this.audioRef} id="audioPlayer" src={this.state.currentSong.source} />
        <div className="background-image-blur" />
        <div className="background-image-overlay" />
        <div id="background-bars" className="background-bars"> </div>
        <div className="player-container">
          <div className="artist-container"><Artist /></div>
          <div className="visualization-container"><Visualization /></div>
          <div className="album-container"><Album /></div>
          <div className="song-list-container"><SongList trackList = {this.state.trackList} currentSong = {this.state.currentSong} selectSong={this.selectSong}/></div>
          <div className="controls-container"><Controls currentSong = {this.state.currentSong} 
                                                        isPlaying = {this.state.isPlaying}
                                                        playPause = {this.playPause} 
                                                        nextPrev = {this.nextPrev}
                                                        currentTime={this.state.currentTime}/></div>
        </div>
      </div>
    );
  }
}

export default App;
