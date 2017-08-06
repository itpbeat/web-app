import React from 'react';
import {ReactMic} from 'react-mic';
var classNames = require('classnames');
import '../styles/Wiggy.css';

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
    this.handleGlobalKeydown = this.handleGlobalKeydown.bind(this);
  }

  componentDidMount() {
    this.initialize();
    document.addEventListener('keydown', this.handleGlobalKeydown, false);
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
  handleGlobalKeydown(e) {
    if (e.keyCode === 66) { // press B
      e.preventDefault();
      e.stopPropagation();
      this.playTrack(0);
    }
    if (e.keyCode === 84) { // press T
      e.preventDefault();
      e.stopPropagation();
      this.playTrack(1);
    }
    if (e.keyCode === 75) { // press K
      e.preventDefault();
      e.stopPropagation();
      this.playTrack(2);
    }
    if (e.keyCode === 83) { // press S
      e.preventDefault();
      e.stopPropagation();
      this.playTrack(3);
    }
  }
  playTrack(trackNumber) {
    console.log(this.state.tracks[trackNumber]);
    this.state.tracks[trackNumber].play();
    console.log(trackNumber);
  }

  render() {
    const trackButtonBClass = classNames({
      'wiggy-button': true,
      'wiggy-button-b': true
    });
    const trackButtonTClass = classNames({
      'wiggy-button': true,
      'wiggy-button-t': true
    });
    const trackButtonKClass = classNames({
      'wiggy-button': true,
      'wiggy-button-k': true
    });
    const trackButtonSClass = classNames({
      'wiggy-button': true,
      'wiggy-button-s': true
    });

    return (
      <div className="wiggy__container">
        <header className="component-header">
          <h1>YOU FOUND WIGGY!</h1>
        </header>
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
