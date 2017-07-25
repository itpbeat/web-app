import React from 'react';
const bootsSoundUrl = require('../assets/boots.wav');
const toolsSoundUrl = require('../assets/tools.wav');
const kaleSoundUrl = require('../assets/kale.wav');
const shoesSoundUrl = require('../assets/shoes.wav');
const playImageUrl = require('../assets/play.png');
const rejectImageUrl = require('../assets/play.png');
const recordImageUrl = require('../assets/play.png');
const acceptImageUrl = require('../assets/play.png');

class Beatmachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programState: 0
    };
    this.listenTrack = this.listenTrack.bind(this);
    this.playTrack = this.playTrack.bind(this);
    // this.acceptTrack = this.acceptTrack.bind(this);
    // this.rejectTrack = this.rejectTrack.bind(this);
  }
  listenTrack() {
    console.log(this.state.programState);
  }
  playTrack() {
    console.log("I will play now");
    kaleSound.play();
  }
  render() {

    console.log("Testing testing 123");
    kaleSound.play();
    return (
      <div>

        <section className="controls" id="controls">
          <div className="controls__listen">
            <h2 id="sound-name" className="listen__title">BOOTS</h2>
            <button id="ref-button" className="listen__button" onClick={() => kaleSound.play()}>
              <img src={playImageUrl} className="listen__image" id="play-image"/>
            </button>
          </div>
          <div className="controls__record">
            <button id="button-reject" className="record__button record__button--disabled" disabled>
              <img src={playImageUrl} className="record__image-small"/>
            </button>
            <button className="button-record" id="button-record">
              <img src={playImageUrl} className="record__image" id="record-image"/>
            </button>
            <button id="button-accept" className="record__button record__button--disabled" disabled>
              <img src={playImageUrl} className="record__image-small"/>
            </button>
          </div>
        </section>
        <section className="beats-container">
          <button className="beat-button beat-button--deactivate beat-button-b" disabled>
            <h2 className="beat-button__title">B</h2>
            <h3 className="beat-button__name">Boots</h3>
          </button>
          <button className="beat-button beat-button--deactivate beat-button-t" disabled>
            <h2 className="beat-button__title">T</h2>
            <h3 className="beat-button__name">Tools</h3>
          </button>
          <button className="beat-button beat-button--deactivate beat-button-k" disabled>
            <h2 className="beat-button__title">K</h2>
            <h3 className="beat-button__name">Kale</h3>
          </button>
          <button className="beat-button beat-button--deactivate beat-button-s" disabled>
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
        </section>

      </div>
    );
  }
}

export default Beatmachine;
