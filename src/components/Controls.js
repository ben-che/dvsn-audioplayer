import React, { Component } from 'react';
import './Controls.css';
import Play from 'react-icons/lib/fa/play-circle';
import Pause from 'react-icons/lib/fa/pause-circle';
import Next from 'react-icons/lib/fa/angle-double-right';
import Previous from 'react-icons/lib/fa/angle-double-left';

class Controls extends Component {
  render() {
    

    return (
      <div className="controls-body">
        <div className="info-container">
          <div className="info-flex">
            <p>{this.props.currentSong.name}</p>
            <p>{this.props.currentTime !== 0 ? `${this.props.currentTime + ' / '}` : null}  {this.props.currentSong.duration}</p>
          </div>
        </div>

          <div className="icon-container">
            <div className="icon-flex">
              <div>
                <Previous className = {`next-prev-icon ${this.props.currentSong.name === "With Me" ? 'next-prev-disabled' : ''}`} onClick={()=>this.props.nextPrev(-1)} color={this.props.currentSong.name === "With Me" ? 'grey' : 'white'} />
                {this.props.isPlaying ? <Pause className="play-pause-icon" onClick={this.props.playPause} color="white" /> : <Play className="play-pause-icon" onClick={this.props.playPause} color="white" />}
                <Next className = {`next-prev-icon ${this.props.currentSong.name === "The Line" ? 'next-prev-disabled' : ''}`} onClick={()=>this.props.nextPrev(1)} color={this.props.currentSong.name === "The Line" ? 'grey' : 'white'} />
              </div>
          </div>
        </div>
      
      </div>
    );
  }
}

export default Controls;
