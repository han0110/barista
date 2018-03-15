// @flow

import React, { Component } from 'react';

import Canvas from './Canvas';
import Control from './Control';
import styles from './App.scss';

class App extends Component<{}> {
  render() {
    return (
      <div className={styles.wrapper}>
        <Canvas />
        <Control />
      </div>
    );
  }
}


export default App;
