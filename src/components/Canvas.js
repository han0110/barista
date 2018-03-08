// @flow

import React, { Component } from 'react';
import PixiMgr from '../pixi/PixiMgr';

class Canvas extends Component<{}> {
  pixiMgr: PixiMgr;
  canvas: ?HTMLDivElement;

  constructor() {
    super();
    this.pixiMgr = new PixiMgr();
  }

  componentDidMount() {
    if (this.canvas) { this.canvas.appendChild(this.pixiMgr.getView()); }
  }

  render() {
    return <div ref={(div) => { this.canvas = div; }} />;
  }
}

export default Canvas;
