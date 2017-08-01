import React from 'react';
import Header from './Header.jsx';
import Video from './Video.jsx';
import Planet from './Planet.jsx';

/*
import styles from './App.css';
const bgImageUrl = require('../assets/star_bg.png');

function App() {
    return (
      <div>
        <div>
          <Image src={bgImageUrl} style= {styles.backgroundImage} resizeMode={Image.resizeMode.sretch}/>
*/
import Beatmachine from './Beatmachine.jsx';
const bgImageUrl = require('../assets/star_bg.png');
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
        <Image src={bgImageUrl} className= "backgroundImage" resizeMode={Image.resizeMode.sretch}/>
          <Header/>
          <Video/>
          <Planet/>
          <Beatmachine/>
        </div>
      </div>
    );
}

export default App;
