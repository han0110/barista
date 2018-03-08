// @flow

import * as PIXI from 'pixi.js';

class PixiMgr {
  app: PIXI.Application;

  constructor() {
    this.app = new PIXI.Application(window.innerWidth, window.innerHeight, { antialias: true });
  }

  getView = () => this.app.view;
}

export default PixiMgr;
