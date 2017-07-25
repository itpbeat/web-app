import React from 'react';
import YouTube from 'react-youtube';
class Video extends React.Component {
  render() {
    const opts = {
      height: '780',
      width: '1280',
      playerVars: { // not autoplay
        autoplay: 0
      }
    };

    return (
      <YouTube
      //your video id
        videoId="b9-3N383eRY"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default Video
