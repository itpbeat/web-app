import React from 'react';
import ReactDOM, {render} from 'react-dom';
import App from './components/App.jsx';

class Main extends React.Component {
  render () {
    return (
      <App/>
    );
  }
}

render(<Main/>, document.getElementById('app'));
