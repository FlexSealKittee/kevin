import React from 'react';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app light">
        <button className="neumorphic-light neumorphic-red"><i className="fas fa-heart"></i></button>
        <button className="neumorphic-light"><i className="fas fa-backward"></i></button>
        <button className="neumorphic-inset-light"><i className="fas fa-play"></i></button>
        <button className="neumorphic-light"><i className="fas fa-forward"></i></button>
        <button className="neumorphic-light neumorphic-green"><i className="fas fa-redo-alt"></i></button>
      </div>
    )
  }
}