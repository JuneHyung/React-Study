import React, { Component } from 'react';
import './App.css'
import TodaysPlan from './03/TodaysPlan';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Doit! 리액트 시작하기</h1>
        <div className="body">
          <TodaysPlan />
        </div>
      </div>
    );
  }
}

export default App;