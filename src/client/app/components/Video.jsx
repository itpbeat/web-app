import React from 'react';
import YouTube from 'react-youtube';
class Video extends React.Component {
  render() {
    const opts = {
      height: '500',
      width: '800',
      playerVars: { // not autoplay
        autoplay: 0
      }
    };

    return (
      <div className='centerContent'>
      <YouTube
        videoId="b9-3N383eRY"
        opts={opts}
        onReady={this._onReady}
      />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default Video
