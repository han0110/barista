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

    window.onresize = this.resize;
  }

  componentDidMount() {
    this.resize();
    this.canvas.appendChild(this.pixiMgr.getView());
  }

  resize = () => {
    const { clientWidth: width, clientHeight: height } = this.canvas;
    this.pixiMgr.setSize(width, height);
  }

  render() {
    return <div className={styles.canvas} ref={(div) => { if (div) this.canvas = div; }} />;
  }
}

export default Canvas;
