import React from 'react';
import Header from './Header.jsx';
import Video from './Video.jsx';
import Planet from './Planet.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header/>
        <Video/>
        <Planet/>
      </div>
    );
  }
}
export default App;
