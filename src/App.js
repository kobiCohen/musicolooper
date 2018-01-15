import React, { Component } from 'react';
import './App.css';
import Looper from './components/looper/looper.js'
class App extends Component {
  render() {
    return (
      <div className="box">
       <article className="media">
        <Looper></Looper>
        </article>
     </div>
    );
  }
}

export default App;
