// @flow

import { Sprite, Graphics } from 'pixi.js';

const config = {
  width: 32,
  height: 24,
  unit: 20,
};

class Grid extends Sprite {
  constructor() {
    const { unit } = config;
    const width = unit * config.width;
    const height = unit * config.height;

    const lineG = new Graphics();

    let x = unit;
    let y = unit;
    lineG.lineStyle(2, 0X00FF00, 0.2);

    while (x <= width - unit) {
      lineG.moveTo(x, 0);
      lineG.lineTo(x, height);
      x += unit;
    }

    while (y <= height - unit) {
      lineG.moveTo(0, y);
      lineG.lineTo(width, y);
      y += unit;
    }

    super(lineG.generateCanvasTexture());
    this.name = 'grid';
  }
}

export default Grid;
