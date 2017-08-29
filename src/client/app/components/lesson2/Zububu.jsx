import React from 'react';
import {ReactMic} from 'react-mic';
var classNames = require('classnames');
import '../../styles/wiggy.css';

const wiggyImageUrl = require('../../assets/bubu.png');

class Bubu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="starBackground">
        <div className="wiggy__container">
          <header className="component-header">
            <h1>YOU FOUND ZUBUBU!</h1>
          </header>
          <img className="zububu__image" src={wiggyImageUrl}/>
        </div>
      </div>
    );
  }
}

export default Bubu;
