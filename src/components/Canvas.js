// @flow

import React, { Component } from 'react';
import io from 'socket.io-client';
import PixiMgr from '../pixi/PixiMgr';

import styles from './App.scss';
import config from '../../share/config';

class Canvas extends Component<{}> {
  canvas: HTMLDivElement;
  pixiMgr: PixiMgr;
  socket: io;

  constructor() {
    super();
    this.pixiMgr = new PixiMgr();

    this.pixiInit();
    this.socketInit();
  }

  componentDidMount() {
    this.pixiMgr.setSize(640, 480);
    this.canvas.appendChild(this.pixiMgr.getView());
  }

  pixiInit = () => {
    this.pixiMgr.createGird();
  }

  socketInit = () => {
    this.socket = io(`localhost:${config.socketPort}`);

    this.socket.on('objects', () => {
    });
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
