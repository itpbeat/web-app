import React from 'react';
import {ReactMic} from 'react-mic';
var classNames = require('classnames');

const bootsSound = require('../../assets/RefP.wav');
const toolsSound = require('../../assets/RefT.wav');
const kaleSound = require('../../assets/RefK.wav');
const shoesSound = require('../../assets/RefS.wav');
const countoffSound = require('../../assets/metronome.wav');
const hearImageUrl = require('../../assets/speaker.png');
const rejectImageUrl = require('../../assets/reject.png');
const recordImageUrl = require('../../assets/rec.png');
const playImageUrl = require('../../assets/play.png');
const acceptImageUrl = require('../../assets/accept.png');

class Beatmachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programState: 0,
      isRecording: false,
      isDeciding: false,
      noClicks: 0,
      countoffTrack: null,
      referenceTracks: {
        0: bootsSound,
        1: toolsSound,
        2: kaleSound,
        3: shoesSound
      },
      referenceNames: {
        0: "B",
        1: "T",
        2: "K",
        3: "S"
      },
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
      messages: {
        1: "Record 1st Sound",
        2: "Record 2nd Sound",
        3: "Record 3rd Sound",
        4: "Record 4th Sound",
        5: "Play Together"
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
    this.playSampleRecording = this.playSampleRecording.bind(this);
    this.handleGlobalKeydown = this.handleGlobalKeydown.bind(this);
    this.handleGlobalMouseUp = this.handleGlobalMouseUp.bind(this);
  }
  componentDidMount() {
    let tempTrack = null;
    tempTrack = new Audio(countoffSound);
    this.setState({countoffTrack: tempTrack});
    document.addEventListener('keydown', this.handleGlobalKeydown, false);
    document.addEventListener('mouseup', this.handleGlobalMouseUp, false);
  }
  handleGlobalMouseUp() {
    console.log('mouseLifted');
    if(this.state.isRecording) {
      this.stopRecording();
    }
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
  acceptTrack() {
    $(".circle").removeClass("circle--green");
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

  componentDidUpdate() {
      if(this.state.noClicks == 30 ) {
        this.props.increaseProgramState();
      }
  }

  playTrack(trackNumber) {
    console.log('playing track ', trackNumber, this.state.isTrackRecorded[trackNumber]);
    if(this.state.noClicks < 30) {
      if (this.state.isTrackRecorded[trackNumber]) {
        const audioTrack = new Audio(this.state.recordedBlobURL[trackNumber]);
        audioTrack.play();
      }
      if (this.state.programState >= 4){
        this.setState({noClicks: this.state.noClicks + 1});
      }
    }
  }

  rejectTrack() {
    $(".circle").removeClass("circle--green");
    this.setState({isDeciding: false});
  }
  playSampleRecording() {
    let refAudio = null;
    if (this.state.programState < 4) {
      refAudio = new Audio(this.state.referenceTracks[this.state.programState]);
      refAudio.play();
    }
  }
  startRecording() {
    if (!this.state.isDeciding) {
      $(".circle").addClass("circle--orange");
      $(".circle__left").addClass("circle__half");
      $(".circle__right").addClass("circle__half circle__half--right");
      this.state.countoffTrack.play();
      let that = this;
      setTimeout(function(){
         that.setState({isRecording: true});
         $(".circle").addClass("circle--green");
       }, 1800);

    } else {
      this.playRecording();
    }
  }

  stopRecording() {
    if (!this.state.isDeciding) {
      $(".circle").removeClass("circle--orange");
      $(".circle__left").removeClass("circle__half");
      $(".circle__right").removeClass("circle__half circle__half--right");
      this.setState({isRecording: false, isDeciding: true});
    }
  }
  onStopRecording(recordedBlob) {
    this.setState({tempRecordedBlobURL: recordedBlob.blobURL});
  }
  playRecording() {
    const audioPlay = new Audio(this.state.tempRecordedBlobURL);
    audioPlay.play();
  }
  render() {
    const recordButtonClass = classNames({
      'record__button': true,
      'record__button--disabled': !this.state.isDeciding
    });
    const trackButtonBClass = classNames({
      'beat-button': true,
      'beat-button-b': true,
      'beat-button--deactivate': !this.state.isTrackRecorded[0]
    });
    const trackButtonTClass = classNames({
      'beat-button': true,
      'beat-button-t': true,
      'beat-button--deactivate': !this.state.isTrackRecorded[1]
    });
    const trackButtonKClass = classNames({
      'beat-button': true,
      'beat-button-k': true,
      'beat-button--deactivate': !this.state.isTrackRecorded[2]
    });
    const trackButtonSClass = classNames({
      'beat-button': true,
      'beat-button-s': true,
      'beat-button--deactivate': !this.state.isTrackRecorded[3]
    });
    const buttonNameBClass = classNames({
      'beat-button__name': true,
      'button-name-b': true,
      'button-name--deactivate': !this.state.isTrackRecorded[0]
    });
    const buttonNameTClass = classNames({
      'beat-button__name': true,
      'button-name-t': true,
      'button-name--deactivate': !this.state.isTrackRecorded[1]
    });
    const buttonNameKClass = classNames({
      'beat-button__name': true,
      'button-name-k': true,
      'button-name--deactivate': !this.state.isTrackRecorded[2]
    });
    const buttonNameSClass = classNames({
      'beat-button__name': true,
      'button-name-s': true,
      'button-name--deactivate': !this.state.isTrackRecorded[3]
    });
    let showImageUrl = null;
    if (!this.state.isDeciding) {
      showImageUrl = recordImageUrl;
    } else {
      showImageUrl = playImageUrl;
    }

    return (
      <div>
        <h1 className="beatmachine__inst">
          {this.state.messages[this.state.programState+1]}
        </h1>
        <div className="beatmachine__container">
          {(() => { // eslint-disable-line
            if (this.state.programState < 4) {
              return (
                <div>

                  <section className="controls" id="controls">
                    <h1
                      id="sound-name"
                      className="instruction__record"
                    >
                      Record, Replay and Save
                    </h1>
                    <div className="controls__listen">

                      <button id="ref-button" className="listen__button" onClick={this.playSampleRecording}>
                        <img src={hearImageUrl} className="listen__image" id="record__image-small"/>
                      </button>
                      <h1
                        id="sound-name"
                        className="listen__title"
                      >
                        {this.state.referenceNames[this.state.programState]}
                      </h1>
                    </div>
                    <div className="controls__record">
                      <button id="button-reject"
                        className={recordButtonClass}
                        disabled={!this.state.isDeciding}
                        onClick={this.rejectTrack}
                      >
                        <img src={rejectImageUrl} className="record__image-small"/>
                      </button>
                      <button
                        onMouseDown={this.startRecording}
                        onMouseUp={this.stopRecording}
                        className="record__button"
                        id="button-record"
                      >
                        <div className="circle">
                          <div className="circle__left"></div>
                          <div className="circle__right"></div>
                          <img src={showImageUrl} className="record__image" id="record-image"/>
                        </div>

                      </button>
                      <button
                        id="button-accept"
                        className={recordButtonClass}
                        disabled={!this.state.isDeciding}
                        onClick={this.acceptTrack}
                      >
                        <img src={acceptImageUrl} className="record__image-small"/>
                      </button>
                    </div>
                  </section>

                </div>
              )
            }
          })()}
          {(() => { // eslint-disable-line
            if (this.state.programState >= 4) {
              return (
                <div>
                    <h1
                      id="sound-name"
                      className="instruction__play"
                    >
                      Time to freestyle and play together with your words to find Wiggy
                    </h1>
                </div>
              )
            }
          })()}
          <section className="beats-container">
            <div className="beat-button__container">
              <h3 className={buttonNameBClass}>PRESS</h3>
              <button className={trackButtonBClass} disabled={!this.state.isTrackRecorded[0]} onClick={() => this.playTrack(0)}>

                <h2 className="beat-button__title">B</h2>
              </button>
            </div>
            <div className="beat-button__container">
              <h3 className={buttonNameTClass}>PRESS</h3>
              <button className={trackButtonTClass} disabled={!this.state.isTrackRecorded[1]} onClick={() => this.playTrack(1)}>

                <h2 className="beat-button__title">T</h2>
              </button>
            </div>
            <div className="beat-button__container">
              <h3 className={buttonNameKClass}>PRESS</h3>
              <button className={trackButtonKClass} disabled={!this.state.isTrackRecorded[2]} onClick={() => this.playTrack(2)}>

                <h2 className="beat-button__title">K</h2>
              </button>
            </div>
            <div className="beat-button__container">
              <h3 className={buttonNameSClass}>PRESS</h3>
              <button className={trackButtonSClass} disabled={!this.state.isTrackRecorded[3]} onClick={() => this.playTrack(3)}>

                <h2 className="beat-button__title">S</h2>
              </button>
            </div>
          </section>
          {(() => { // eslint-disable-line
            if (this.state.programState >= 4) {
              return (
                <div>
                  <section className="count-container" id="counts">
                    <h3 className="count__inst">
                      Press B, T, K, S
                    </h3>
                    <div className="count__tally">
                      <p className="count__number" id="count-no">
                        {this.state.noClicks}
                      </p>
                      <p className="count__total" id="total-counts">
                        <span className="count__total-30">30</span> Times!
                      </p>
                    </div>

                  </section>
                </div>
              )
            }
          })()}
          <div className="beatmachine__recordwaves">
            <ReactMic record={this.state.isRecording} className="sound-wave" onStop={this.onStopRecording} strokeColor="#000000" backgroundColor="#FF4081"/>
          </div>

        </div>
      </div>
    );
  }
}

export default Beatmachine;
