import React from 'react';
import Header from './Header.jsx';
import Video from './Video.jsx';
import Planet from './Planet.jsx';
import Beatmachine from './Beatmachine.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <Header/>
          <Video/>
          <Planet/>
          <Beatmachine/>
        </div>
      </div>
    );
  }
}
export default App;
