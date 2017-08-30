import React from 'react';
import {ReactMic} from 'react-mic';
var classNames = require('classnames');
import '../../styles/simonsays.css';

const pSimonSoundUrl = require('../../assets/RefP.wav');
const tSimonSoundUrl = require('../../assets/RefT.wav');
const kSimonSoundUrl = require('../../assets/RefK.wav');
const sSimonSoundUrl = require('../../assets/RefS.wav');

class Simonsays extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programState: 1,
      message: "Hit START and follow the beat",
      simonSequence: [],
      userSequence: [],
      gameStarted: true,
      strictOn: false,
      isUserPlaying: false,
      audioSequences: {
        0: pSimonSoundUrl,
        1: tSimonSoundUrl,
        2: kSimonSoundUrl,
        3: sSimonSoundUrl
      },
      finalLength: 6
    };
    this.simonTurn = this.simonTurn.bind(this);
    this.simonSays = this.simonSays.bind(this);
    this.newMove = this.newMove.bind(this);
    this.getRand = this.getRand.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.startGame = this.startGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.userPress = this.userPress.bind(this);
    this.buttonEffect = this.buttonEffect.bind(this);
    this.handleSimonGlobalKeydown = this.handleSimonGlobalKeydown.bind(this);
  }

  componentDidMount() {
    document.onkeydown = null;
    document.onkeydown = this.handleSimonGlobalKeydown;
  }

  handleSimonGlobalKeydown(e) {

    if (e.keyCode === 80) { // press P
      console.log("P key Pressed");
      e.preventDefault();
      e.stopPropagation();
      console.log(" in here - P key Pressed");
      this.userPress(0);
    }
    if (e.keyCode === 84) { // press T
      e.preventDefault();
      e.stopPropagation();
      this.userPress(1);
    }
    if (e.keyCode === 75) { // press K
      e.preventDefault();
      e.stopPropagation();
      this.userPress(2);
    }
    if (e.keyCode === 83) { // press S
      e.preventDefault();
      e.stopPropagation();
      this.userPress(3);
    }
  }

  startGame() {
    this.simonTurn();
  }
  resetGame() {
    this.setState({
      programState: 1,
      message: "Hit START and follow the beat",
      simonSequence: [],
      userSequence: [],
      gameStarted: true,
      strictOn: false,
      isUserPlaying: false
    });
  }
  userPress(index) {
    let that = this;
    this.buttonEffect(index);
    this.playAudio(index);
    if (this.state.isUserPlaying == true) {
      let tempUserSeq = this.state.userSequence;
      tempUserSeq.push(index);
      this.setState({userSequence: tempUserSeq})

      if (this.state.userSequence.length == this.state.simonSequence.length) {
        let tempSequenceMatches = this.state.userSequence.every(function(item, index) {
          return (item == that.state.simonSequence[index]);
        });
        console.log(tempSequenceMatches);

        if (tempSequenceMatches && this.state.userSequence.length<this.state.finalLength) {
          let that = this;
          this.setState({
            userSequence: [],
            programState: this.state.programState + 1,
            message: "Good Job, try the next pattern now!"
          }, () => {
            setTimeout(function() {
              that.startGame();
            },1000);

          });
        } else if(tempSequenceMatches && this.state.userSequence.length==this.state.finalLength) {
          this.setState({
            userSequence: [],
            message: "Good Job, You WIN!"
          });
          window.location = "/lesson2_zububu";
        } else {
          this.setState({userSequence: [], message: "That didn't match, try again!"});
        }

      }
    }
  }
  playAudio(index) {
    let tempTrack = null;
    tempTrack = new Audio(this.state.audioSequences[index]);
    tempTrack.play();
  }
  getRand() {
    var test = Math.floor(Math.random() * (4));
    return test;
  }
  newMove() {
    let quad = this.getRand();
    let tempSeq = this.state.simonSequence;
    tempSeq.push(quad);
    this.setState({simonSequence: tempSeq});
  }
  buttonEffect(index) {
    $($(".button")[index]).toggleClass("button--pressed");
    setTimeout(function(){
      $($(".button")[index]).toggleClass("button--pressed");
    }, 250);
  }
  simonSays(i, isLastBeat) {
    let that = this;
    this.setState({isUserPlaying: false})
    setTimeout(function() {
      var quadIndex = that.state.simonSequence[i];
      that.buttonEffect(quadIndex);
      that.playAudio(quadIndex);
      if (isLastBeat) {
        that.setState({isUserPlaying: true})
      }
    }, i * 800);
  }
  simonTurn() {
    if (this.state.gameStarted == true) {
      if (this.state.programState > this.state.simonSequence.length) {
        this.newMove();
      }
      for (var i = 0; i < this.state.programState; i += 1) {
        if (i == this.state.simonSequence.length - 1) {
          this.simonSays(i, true);
        } else {
          this.simonSays(i, false);
        }

      }

    }
  }

  render() {
    return (
      <div className="greenBackground">
        <h1 className="simonsays__inst">Beatboxing Simon Says</h1>
        <div className="simonsays__container">
          <h2 className="simonsays__sub-inst">
            {this.state.message}
          </h2>
          <div className="simonsays__controls">
            <div className="controls__container">
              <button id="start" onClick={this.startGame} className="control__button">
                Start
              </button>
              <button id="reset" onClick={this.resetGame} className="control__button">
                Reset
              </button>
            </div>

            <div className="buttons__container">
              <button className="button button__P" onClick={() => this.userPress(0)}>
                <p>P</p>
              </button>
              <button className="button button__T" onClick={() => this.userPress(1)}>
                <p>T</p>
              </button>
              <button className="button button__K" onClick={() => this.userPress(2)}>
                <p>K</p>
              </button>
              <button className="button button__S" onClick={() => this.userPress(3)}>
                <p>S</p>
              </button>
            </div>
            <div className="count__container">
              <p className="patterns-count__number">
                {this.state.programState}
              </p>
              <p className="patterns-count__total">
                OF {this.state.finalLength}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Simonsays;
