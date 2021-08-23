import React, { Component } from 'react';
// import Counter from './03/Counter';
// import NewCounter from './03/NewCounter';
import Counter from './03/Counter2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
    // this.resetCount = this.resetCount.bind(this);
    this.increateCount = this.increateCount.bind(this)
  }
  // resetCount() {
  //   this.setState(({ count }) => ({ count: count + 10 }));
  // }
  increateCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  render() {
    return (
      // <div>
      //   <div>
      //     <Counter count={this.state.count} />
      //   </div>
      //   <div><NewCounter count={this.state.count} /></div>
      //   <button onClick={this.resetCount}>{ this.state.count + 10}으로 초기화</button>
      // </div>
      <Counter count={this.state.count} onAdd={this.increateCount} />
    );
  }
}

export default App;