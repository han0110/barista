// @flow

import React, { Component } from 'react';

import Canvas from './Canvas';
import styles from './App.scss';

class App extends Component<{}> {
  render() {
    return (
      <div className={styles.wrapper}>
        <Canvas />
      </div>
    );
  }
}


export default App;
