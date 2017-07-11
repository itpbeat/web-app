import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  sayHi() {
    console.log('Im saying hi');
  }
  increaseCount() {
    const newCount = this.state.count + 1;
    this.setState({ count: newCount });
  }
  render() {
    return (
      <div>
        <h1>POTATO</h1>
        <h2>Increase</h2>
        <h3>{this.state.count}</h3>
        <button onClick={this.sayHi}> Click Me </button>
        <button onClick={this.increaseCount}> Count </button>
      </div>
    );
  }
}

export default Counter;
