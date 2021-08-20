import React, { Component } from 'react';
// import PropComponent from './03/PropsComponent';
// import ChildComponent from './03/ChildComponent';
// import BooleanComponent from './03/BooleanComponent';
// import ChildComponent2 from './03/ChildComponent2';
// import DefaultPropsComponent from './03/DefaultPropsComponent';
import ChildProperty from './03/ChildProperty';
class App extends Component {
  render() {
    return (
      <div>
        <ChildProperty>
          <div><span>자식노드</span></div>
        </ChildProperty>
      </div>
    );
  }
}

export default App;