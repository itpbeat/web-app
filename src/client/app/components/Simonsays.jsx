import React from 'react';
import {ReactMic} from 'react-mic';
var classNames = require('classnames');
import '../styles/simonsays.css';

const pSoundUrl = require('../assets/RefP.wav');
const tSoundUrl = require('../assets/RefT.wav');
const kSoundUrl = require('../assets/RefK.wav');
const sSoundUrl = require('../assets/RefS.wav');


class Simonsays extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programState: 1,
      message: "",
      simonSequence: [],
      userSequence: [],
      gameStarted: true,
      strictOn: false,
      isUserPlaying: false,
      audioSequences: {
        0: pSoundUrl,
        1: tSoundUrl,
        2: kSoundUrl,
        3: sSoundUrl
      },
    };
    this.simonTurn = this.simonTurn.bind(this);
    this.simonSays = this.simonSays.bind(this);
    this.newMove = this.newMove.bind(this);
    this.getRand = this.getRand.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.startGame = this.startGame.bind(this);
    this.userPress = this.userPress.bind(this);
    this.setMismatch = this.setMismatch.bind(this);
    this.setMatch = this.setMatch.bind(this);
  }
  setMatch() {
    console.log('set Match');
    this.setState({
      sequenceMatches: true,
      message: "POTATO",
    });
  }
  setMismatch() {
    console.log('set Mismatch');
    this.setState({
      sequenceMatches: false,
      message: "TOMATO",
    });
  }
  startGame() {
    this.setState({
      message: ""
    });
    this.simonTurn();
  }
  userPress(index) {
    let that = this;
    if(this.state.isUserPlaying == true) {
      let tempUserSeq = this.state.userSequence;
      tempUserSeq.push(index);
      this.setState({
        userSequence: tempUserSeq
      })

      if(this.state.userSequence.length == this.state.simonSequence.length) {
        let tempSequenceMatches = this.state.userSequence.every(function(item,index){
          return(item == that.state.simonSequence[index]);
        });
        console.log(tempSequenceMatches);
        //decide the next step based on whether the input was right or wrong
        if(tempSequenceMatches) {
          this.setState({
            userSequence: [],
            programState: this.state.programState + 1,
            message: "Good Job, try the next pattern now!",
          },() => {
            this.startGame();
          });

        } else {
          this.setState({
            userSequence: [],
            message: "That didn't match, try again!",
          });
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
    this.setState({
      simonSequence: tempSeq,
    });
  }
  simonSays(i, isLastBeat) {
    let that = this;
    this.setState({
      isUserPlaying: false
    })
    setTimeout(function(){
        var quadIndex = that.state.simonSequence[i];
        that.playAudio(quadIndex);
        if(isLastBeat) {
          that.setState({
            isUserPlaying: true
          })
        }
    }, i * 800);
  }
  simonTurn() {
    if (this.state.gameStarted == true) {
      if(this.state.programState > this.state.simonSequence.length) {
        this.newMove();
      }
      for (var i = 0; i < this.state.programState; i += 1) {
        if(i == this.state.simonSequence.length-1) {
          this.simonSays(i,true);
        }
        else {
          this.simonSays(i,false);
        }

      }

    }
  }

  render() {
    return (
      <div>
        <h1>Beatboxing Simon Says</h1>
        <h2>Hit Start and try to follow the sequence with the mouse. If you can follow the sequence 8 times, you win</h2>

        <div className="board">
          <div className="row">
            <button className="quadrant green" onClick={() => this.userPress(0) }>
            <p>P</p>
            </button>

            <button className="quadrant red" onClick={() => this.userPress(1) }>
              <p>T</p>
            </button>
          </div>
          <div className="row">
            <button className="quadrant yellow" onClick={() => this.userPress(2) }><p>K</p></button>
            <button className="quadrant blue" onClick={() => this.userPress(3) }><p>S</p></button>
          </div>
          <div className="controls">
            <p id="count">Pattern No. {this.state.programState}</p>
            <button
              id="start"
              onClick={this.startGame}
            >
              Start
            </button>
            <button id="strict">Strict</button>
            <button id="reset">Reset</button>
          </div>
        </div>

        <div id="modal" className="hidden">
          <h1 id="modalMessage">Win!</h1>
        </div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Simonsays;
