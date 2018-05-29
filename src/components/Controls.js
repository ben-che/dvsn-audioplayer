import React, { Component } from 'react';
import './Controls.css';
import Play from 'react-icons/lib/fa/play-circle';
import Pause from 'react-icons/lib/fa/pause-circle';

class Controls extends Component {
  render() {
    return (
      <div className="controls-body">
        <div className="info-container">
          <div className="info-flex">
            <p>{this.props.currentSong.name}</p>
            <p>{this.props.currentSong.duration}</p>
          </div>
        </div>

          <div className="icon-container">
            <div className="icon-flex">
              <div onClick={this.props.playPause} className="play-pause-icon">
                {this.props.isPlaying ? <Pause color="white" /> : <Play color="white" />}
              </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Controls;
