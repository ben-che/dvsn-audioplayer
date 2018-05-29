import React, { Component } from 'react';
import './Controls.css';

class Controls extends Component {
  render() {
    return (
      <div className="controls-body">
        {this.props.currentSong.name}
      </div>
    );
  }
}

export default Controls;
