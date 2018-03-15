// @flow

import * as PIXI from 'pixi.js';

class PixiMgr {
  app: PIXI.Application;

  constructor() {
    const options = { antialias: true, backgroundColor: 0x101010 };

    this.app = new PIXI.Application(options);
  }

  setSize = (w: number, h: number) => this.app.renderer.resize(w, h);

  getView = () => this.app.view;
}

export default PixiMgr;
