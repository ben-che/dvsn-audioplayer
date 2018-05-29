import React, { Component } from 'react';
import './Controls.css';
import Play from 'react-icons/lib/fa/play-circle';

class Controls extends Component {
  render() {
    return (
      <div className="controls-body">
        {this.props.currentSong.name}
        <div className=""><Play /></div>
      </div>
    );
  }
}

export default Controls;
