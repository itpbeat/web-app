import React from 'react';
import {render} from 'react-dom';
import Counter from './components/Counter.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <Counter/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
