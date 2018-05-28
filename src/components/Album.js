import React, { Component } from 'react';
import './Album.css';

class Album extends Component {
  render() {
    return (
      <div className='album-body'>
        <div className="album-header-thick"><h2>Album Info</h2></div>
        <div className="accent-bar-alt"></div>
        <div className="album-review"><p>Sept. 5th uses contemporary sounds to explore the positive and meaningful aspects of carnality. This puts the album in a sort of limbo: It feels much more adult compared to the casual, hip-hop-indebted come ons of R&B up-and-comers Tory Lanez and Bryson Tiller. There's no rapping here; the word "bitch" is never uttered. This is not corny music, but it is respectful, even sweet at times. It treats sex not as a social transaction but a serious act—something that can make you see things that aren't there, that can be a balm for life's rough edges, that can make you realize the worth of looking beyond yourself.</p></div>
      </div>
    );
  }
}

export default Album;
