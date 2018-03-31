// @flow

import * as PIXI from 'pixi.js';

import Grid from './Grid';

class PixiMgr {
  app: PIXI.Application;

  constructor() {
    const options = { antialias: true, backgroundColor: 0X0000 };

    this.app = new PIXI.Application(options);
  }

  createGird = () => this.app.stage.addChild(new Grid());

  setSize = (w: number, h: number) => this.app.renderer.resize(w, h);

  getView = () => this.app.view;
}

export default PixiMgr;
