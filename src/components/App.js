// @flow

import React, { Component } from 'react';

import Canvas from './Canvas';
import Info from './Info';
import Control from './Control';
import styles from './App.scss';

class App extends Component<{}> {
  render() {
    return (
      <div className={styles.wrapper}>
        <Canvas />
        <Info />
        <Control />
      </div>
    );
  }
}


export default App;
