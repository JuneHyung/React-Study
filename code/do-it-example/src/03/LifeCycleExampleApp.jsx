import React, { Component } from 'react';
// import PropComponent from './03/PropsComponent';
// import ChildComponent from './03/ChildComponent';
// import BooleanComponent from './03/BooleanComponent';
// import ChildComponent2 from './03/ChildComponent2';
// import DefaultPropsComponent from './03/DefaultPropsComponent';
// import ChildProperty from './03/ChildProperty';
// import StateExample from './03/StateExample';
// import ForceUpdateExample from './03/ForceUpdateExample';
import LifecycleExample from './03/LifeCycleExample';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hasDestroyed: false };
  }
  componentDidMount() {
    this.setState({ hasDestroyed: true });
  }
  render() {
    return (
      <div>
        <div>
          { this.state.hasDestroyed?null:<LifecycleExample/>}
        </div>
      </div>
    );
  }
}

export default App;