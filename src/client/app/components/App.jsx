import React from 'react';
import Header from './Header.jsx';
import Video from './Video.jsx';
import Planet from './Planet.jsx';

const testImageUrl = require('../assets/test.png');

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {(() => { // eslint-disable-line
          if (this.props.authenticated) {
            return (
              <div>
                <img src={testImageUrl} />
                <Header/>
                <Video/>
                <Planet/>
              </div>
            );
          }
        })()}
      </div>
    );
  }
}
export default App;
