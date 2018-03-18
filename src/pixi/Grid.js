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

    const xOffset = (window.innerWidth - width) / 2;
    const yOffset = (window.innerHeight - height) / 2;

    let x = unit;
    let y = unit;
    lineG.lineStyle(2, 0X00FF00, 0.2);

    while (x <= width - unit) {
      lineG.moveTo(x + xOffset, yOffset);
      lineG.lineTo(x + xOffset, yOffset + height);
      x += unit;
    }

    while (y <= height - unit) {
      lineG.moveTo(xOffset, y + yOffset);
      lineG.lineTo(xOffset + width, y + yOffset);
      y += unit;
    }

    super(lineG.generateCanvasTexture());
    this.name = 'grid';
  }
}

export default Grid;
