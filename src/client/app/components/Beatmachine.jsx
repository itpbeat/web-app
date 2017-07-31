import React from 'react';
import {ReactMic} from 'react-mic';
var classNames = require('classnames');

const kaleSound = require('../assets/kale.wav');
const playImageUrl = require('../assets/play.png');
const rejectImageUrl = require('../assets/play.png');
const recordImageUrl = require('../assets/play.png');
const acceptImageUrl = require('../assets/play.png');

class Beatmachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programState: 0,
      isRecording: false,
      isDeciding: false,
      recordedBlobURL: {
        0: null,
        1: null,
        2: null,
        3: null
      },
      isTrackRecorded: {
        0: false,
        1: false,
        2: false,
        3: false
      },
      tempRecordedBlobURL: null,
      currentAudio: null
    };

    this.acceptTrack = this.acceptTrack.bind(this);
    this.rejectTrack = this.rejectTrack.bind(this);
    this.playTrack = this.playTrack.bind(this);
    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    this.onStopRecording = this.onStopRecording.bind(this);
    this.playRecording = this.playRecording.bind(this);
  }
  acceptTrack() {
    const recordedBlobURL = this.state.recordedBlobURL;
    recordedBlobURL[this.state.programState] = this.state.tempRecordedBlobURL;
    const isTrackRecorded = this.state.isTrackRecorded;
    isTrackRecorded[this.state.programState] = true;
    this.setState({
      isDeciding: false,
      recordedBlobURL: recordedBlobURL,
      programState: this.state.programState + 1,
      isTrackRecorded: isTrackRecorded
    });
  }

  playTrack(trackNumber) {
    console.log('playing track ', trackNumber, this.state.isTrackRecorded[trackNumber]);
    if(this.state.isTrackRecorded[trackNumber]) {
      const audioTrack = new Audio(this.state.recordedBlobURL[trackNumber]);
      audioTrack.play();
    }

  }

  rejectTrack() {
    this.setState({isDeciding: false});
  }
  startRecording() {
    console.log('start');
    this.setState({isRecording: true});
  }

  stopRecording() {
    console.log('stop');
    this.setState({isRecording: false, isDeciding: true});
  }
  onStopRecording(recordedBlob) {
    this.setState({tempRecordedBlobURL: recordedBlob.blobURL});
  }
  playRecording() {
    const audioPlay = new Audio(this.state.tempRecordedBlobURL);
    audioPlay.play();
  }
  render() {
    const preferencesContainerClass = classNames({'preferences': true, 'preferences--selected': this.props.isVisible});

    // kaleSound.play();
    return (
      <div>

        <section className="controls" id="controls">
          <div className="controls__listen">
            <h2 id="sound-name" className="listen__title">BOOTS</h2>
            <button id="ref-button" className="listen__button">
              <img src={playImageUrl} className="listen__image" id="play-image"/>
            </button>
          </div>
          <div className="controls__record">
            <button id="button-reject" className="record__button record__button--disabled" disabled={!this.state.isDeciding} onClick={this.rejectTrack}>
              <img src={playImageUrl} className="record__image-small"/>
            </button>
            <button onMouseDown={this.startRecording} onMouseUp={this.stopRecording} className="button-record" id="button-record">
              <img src={playImageUrl} className="record__image" id="record-image"/>
            </button>
            <button id="button-accept" className="record__button record__button--disabled" disabled={!this.state.isDeciding} onClick={this.acceptTrack}>
              <img src={playImageUrl} className="record__image-small"/>
            </button>
          </div>
        </section>
        <section className="beats-container">
          <button
            className="beat-button beat-button--deactivate beat-button-b"
            disabled={!this.state.isTrackRecorded[0]}
            onClick={()=>this.playTrack(0)}
          >
            <h2 className="beat-button__title">B</h2>
            <h3 className="beat-button__name">Boots</h3>
          </button>
          <button
            className="beat-button beat-button--deactivate beat-button-t"
            disabled={!this.state.isTrackRecorded[1]}
            onClick={()=>this.playTrack(1)}
          >
            <h2 className="beat-button__title">T</h2>
            <h3 className="beat-button__name">Tools</h3>
          </button>
          <button
            className="beat-button beat-button--deactivate beat-button-k"
            disabled={!this.state.isTrackRecorded[2]}
            onClick={()=>this.playTrack(2)}
          >
            <h2 className="beat-button__title">K</h2>
            <h3 className="beat-button__name">Kale</h3>
          </button>
          <button
            className="beat-button beat-button--deactivate beat-button-s"
            disabled={!this.state.isTrackRecorded[3]}
            onClick={()=>this.playTrack(3)}
          >
            <h2 className="beat-button__title">S</h2>
            <h3 className="beat-button__name">Shoes</h3>
          </button>
        </section>
        <section className="count-container" id="counts">
          <h3 className="count__inst">
            Press B, T, K, S
          </h3>
          <div className="count__tally">
            <p className="count__number" id="count-no">
              0
            </p>
            <p className="count__total" id="total-counts">
              of 40
            </p>
          </div>
          <div>
            <ReactMic record={this.state.isRecording} className="sound-wave" onStop={this.onStopRecording} strokeColor="#000000" backgroundColor="#FF4081"/>

            <button onClick={this.playRecording} type="button">Play</button>

          </div>
        </section>

      </div>
    );
  }
}

export default Beatmachine;
