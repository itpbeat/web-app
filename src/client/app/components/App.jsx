import React from 'react';
import Header from './Header.jsx';
import Video from './Video.jsx';
import Planet from './Planet.jsx';
import Beatmachine from './Beatmachine.jsx';

const testImageUrl = require('../assets/test.png');

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <img src={testImageUrl} />
          <Header/>
          <Video/>
          <Planet/>
        </div>
      </div>
    );
  }
}
export default App;
