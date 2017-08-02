import React from 'react';
import {ReactMic} from 'react-mic';
var classNames = require('classnames');

const bootsSound = require('../assets/boots.wav');
const toolsSound = require('../assets/tools.wav');
const kaleSound = require('../assets/kale.wav');
const shoesSound = require('../assets/shoes.wav');
const wiggyImageUrl = require('../assets/wiggy.png');

class Wiggy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracksUrl: {
        0: bootsSound,
        1: toolsSound,
        2: kaleSound,
        3: shoesSound
      },
      tracks: {
        0: null,
        1: null,
        2: null,
        3: null
      },
      tempRecordedBlobURL: null,
      currentAudio: null
    };
    this.initialize = this.initialize.bind(this);
    this.playTrack = this.playTrack.bind(this);
  }

  componentDidMount() {
    this.initialize();
  }
  initialize() {
    let tempTrack = null;
    let tempTracks = this.state.tracks;
    for(var i = 0; i< 4;i++) {
      tempTrack = new Audio(this.state.tracksUrl[i]);
      tempTracks[i] = tempTrack;
    }
    this.setState({
      tracks: tempTracks
    })
  }

  playTrack(trackNumber) {
    console.log(this.state.tracks[trackNumber]);
    this.state.tracks[trackNumber].play();
    console.log(trackNumber);
  }

  render() {
    const recordButtonClass = classNames({
      'record__button': true,
      'record__button--disabled': !this.state.isDeciding
    });
    const trackButtonBClass = classNames({
      'beat-button': true,
      'beat-button-b': true
    });
    const trackButtonTClass = classNames({
      'beat-button': true,
      'beat-button-t': true
    });
    const trackButtonKClass = classNames({
      'beat-button': true,
      'beat-button-k': true
    });
    const trackButtonSClass = classNames({
      'beat-button': true,
      'beat-button-s': true
    });

    return (
      <div className="wiggy__container">
        <img className="wiggy__image" src={wiggyImageUrl}/>
        <section className="wiggy-container">
          <button className={trackButtonBClass} onClick={() => this.playTrack(0)}>
            <h2 className="wiggy-button__title">B</h2>
          </button>
          <button className={trackButtonTClass} onClick={() => this.playTrack(1)}>
            <h2 className="wiggy-button__title">T</h2>
          </button>
          <button className={trackButtonKClass} onClick={() => this.playTrack(2)}>
            <h2 className="wiggy-button__title">K</h2>
          </button>
          <button className={trackButtonSClass} onClick={() => this.playTrack(3)}>
            <h2 className="wiggy-button__title">S</h2>
          </button>
        </section>
      </div>
    );
  }
}

export default Wiggy;