import React from 'react';
import {ReactMic} from 'react-mic';
var classNames = require('classnames');
import '../../styles/zububu.css';

const bootsCats = require('../../assets/sounds/BootsCats.wav');
const hipHop = require('../../assets/sounds/HipHop.wav');
const reggaeton = require('../../assets/sounds/Reggaeton.wav');
const trapRobot = require('../../assets/sounds/TrapRobot.wav');
const zububuImageUrl = require('../../assets/bubu.png');

class Bubu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracksUrl: {
        0: bootsCats,
        1: hipHop,
        2: reggaeton,
        3: trapRobot
      },
      tracks: {
        0: null,
        1: null,
        2: null,
        3: null
      }
    };
    this.playTrack = this.playTrack.bind(this);
    this.initialize = this.initialize.bind(this);
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
    for(var i = 0; i< 4;i++) {
      this.state.tracks[i].pause();
    }
    this.state.tracks[trackNumber].play();
  }
  render() {
    const trackButtonBClass = classNames({
      'zububu-button': true,
      'zububu-button-1': true
    });
    const trackButtonTClass = classNames({
      'zububu-button': true,
      'zububu-button-2': true
    });
    const trackButtonKClass = classNames({
      'zububu-button': true,
      'zububu-button-3': true
    });
    const trackButtonSClass = classNames({
      'zububu-button': true,
      'zububu-button-4': true
    });
    return (
      <div className="starBackground">
        <div className="zububu__container">
          <header className="zububu__heading">
            <h1>YOU FOUND ZUBUBU!</h1>
          </header>
          <img className="zububu__image" src={zububuImageUrl}/>
            <section className="zububu-container">
              <button className={trackButtonBClass} onClick={() => this.playTrack(0)}>
                <h2 className="zububu-button__title">Boots and Cats</h2>
              </button>
              <button className={trackButtonTClass} onClick={() => this.playTrack(1)}>
                <h2 className="zububu-button__title">Hip Hop</h2>
              </button>
              <button className={trackButtonKClass} onClick={() => this.playTrack(2)}>
                <h2 className="zububu-button__title">Reggaeton</h2>
              </button>
              <button className={trackButtonSClass} onClick={() => this.playTrack(3)}>
                <h2 className="zububu-button__title">TrapRobot</h2>
              </button>
            </section>
        </div>
      </div>
    );
  }
}

export default Bubu;
