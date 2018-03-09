// @flow

import React, { Component } from 'react';
import PixiMgr from '../pixi/PixiMgr';

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
    return <div ref={(div) => { if (div) this.canvas = div; }} />;
  }
}

export default Canvas;
