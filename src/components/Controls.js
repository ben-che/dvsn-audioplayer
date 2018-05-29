import React, { Component } from 'react';
import './Controls.css';
import Play from 'react-icons/lib/fa/play-circle';
import Pause from 'react-icons/lib/fa/pause-circle';

class Controls extends Component {
  render() {
    return (
      <div className="controls-body">
        {this.props.currentSong.name}
        <div className="play-pause-icon">{this.props.isPlaying ? <Pause color="white" /> : <Play color="white" />}</div>
      </div>
    );
  }
}

export default Controls;
