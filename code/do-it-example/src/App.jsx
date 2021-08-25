import React, { Component } from 'react';
// import PropComponent from './03/PropsComponent';
// import ChildComponent from './03/ChildComponent';
// import BooleanComponent from './03/BooleanComponent';
// import ChildComponent2 from './03/ChildComponent2';
// import DefaultPropsComponent from './03/DefaultPropsComponent';
// import ChildProperty from './03/ChildProperty';
// import StateExample from './03/StateExample';
// import ForceUpdateExample from './03/ForceUpdateExample';
// import LifecycleExample from './03/LifeCycleExample';
// import Counter from './03/Counter';
// import NewCounter from './03/NewCounter';
import Counter from './03/Counter2';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
    this.increateCount = this.increateCount.bind(this)
  }
  increateCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  render() {
    return (
      <Counter count={this.state.count} onAdd={this.increateCount} />
    );
  }
}

export default App;