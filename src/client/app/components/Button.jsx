import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, browserHistory} from 'react-router-dom';
import '../styles/button.css';


class Button extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="buttondiv">
      <button className="button" onClick={this.props.increaseProgramState}> Start </button>
      </div>
    );
  }
}

export default Button;
