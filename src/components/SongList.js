import React, { Component } from 'react';
import './SongList.css';

class SongList extends Component {
  render() {
    let trackListJSX = this.props.trackList.map((element, id) => {
      return (
        <div>

          <p>{`${id}. ${element.name}`}</p>
          <p>{element.source}</p>

          </div>
      )
    })
    return (
      <div className="song-list-body">
        {trackListJSX}
      </div>
    );
  }
}

export default SongList;
