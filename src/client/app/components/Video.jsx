import React from 'react';
import YouTube from 'react-youtube';
import '../styles/header.css';

class Video extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const opts = {
      height: '500',
      width: '800',
      playerVars: { // not autoplay
        autoplay: 0
      }
    };

    return (
      <div className="centerContent">
        <header className="component-header">
          <h1>YOUR MISSION</h1>
          <h4>Record all the sounds to find your new friend Wiggy</h4>
        </header>
        <YouTube
          videoId="BP_QYZTMdc0"
          opts={opts}
          onReady={this._onReady}/>
        <button className="startButton" onClick={this.props.increaseProgramState}> START </button>

      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default Video
