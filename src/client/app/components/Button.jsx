import React from 'react';
import '../styles/button.css';


class Button extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="buttondiv">
      <button className="button" onClick={this.props.increaseProgramState}> START </button>
      </div>
    );
  }
}

export default Button;
