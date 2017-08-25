import React from 'react';

class Planet extends React.Component {
  render() {
    return (
      <div className="component-planet">
        <img
          src="//d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX18241581.jpg"
          role="presentation"
          width="200"
        />
        <h1> Planet Name </h1>
        <h2> Exercise Name </h2>
      </div>
    );
  }
}
export default Planet;
