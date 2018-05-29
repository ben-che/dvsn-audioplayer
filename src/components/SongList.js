import React, { Component } from 'react';
import './SongList.css';

class SongList extends Component {
  render() {
    let trackListJSX = this.props.trackList.map((element, id) => {
      return (
        <div key={id} onClick = {() => this.props.selectSong(element)} className={`single-track-container ${this.props.currentSong === element ? "active-song": ""}`}>
          <p>{`${id+1}.`} <span className="name-spacing">{element.name}</span></p>
          <p className="name-spacing-fix">{element.duration}</p>
        </div>
      )
    })
    return (
      <div className="song-list-body">
        <div className="tracklist-header">
          <h2 className="tracklist-header-title-padding">Track</h2>
          <h2 className="tracklist-header-title-padding">Duration</h2>
        </div>

        {trackListJSX}

      </div>
    );
  }
}

export default SongList;
