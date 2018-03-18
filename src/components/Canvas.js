// @flow

import React, { Component } from 'react';
import PixiMgr from '../pixi/PixiMgr';

import styles from './App.scss';

class Canvas extends Component<{}> {
  pixiMgr: PixiMgr;
  canvas: HTMLDivElement;

  constructor() {
    super();
    this.pixiMgr = new PixiMgr();

    this.init();
  }

  componentDidMount() {
    this.pixiMgr.setSize(640, 480);
    this.canvas.appendChild(this.pixiMgr.getView());
  }

  init = () => {
    this.pixiMgr.createGird();
  }

  render() {
    return (
      <div className={styles.canvas}>
        <div ref={(div) => { if (div) this.canvas = div; }} />
      </div>
    );
  }
}

export default Canvas;
