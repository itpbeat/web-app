import React from 'react';
import Header from './Header.jsx';
import Video from './Video.jsx';
import Button from './Button.jsx';
import Beatmachine from './Beatmachine.jsx';
import '../styles/App.css'
const bgUrl = require('../assets/star_bg.png');
var background = {
  width: "100%",
  backgroundImage: "url(" +  bgUrl + ")"
};

class App extends React.Component {
  render() {
    return (
      <section style = {background}>
        <div>
          <Header/>
          <Video/>
          <Button/>
          <Beatmachine/>
        </div>
      </section>
    );
  }
}

export default App;
