import React, { Component } from 'react';

import styles from './Live.scss';

class Live extends Component<{}> {
  cam0: HTMLVideoElement;
  cam1: HTMLVideoElement;

  async componentDidMount() {
    this.cam0.srcObject = await navigator.mediaDevices.getUserMedia({ video: true });
    this.cam1.srcObject = await navigator.mediaDevices.getUserMedia({ video: true });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Camera 0</div>
        <video
          ref={(video) => { if (video) this.cam0 = video; }}
          autoPlay
          className={styles.vedio}
          style={{ gridArea: 'cam0' }}
        >
          <track kind="captions" />
        </video>
        <div className={styles.title}>Camera 1</div>
        <video
          ref={(video) => { if (video) this.cam1 = video; }}
          autoPlay
          className={styles.vedio}
          style={{ gridArea: 'cam1' }}
        >
          <track kind="captions" />
        </video>
      </div>
    );
  }
}
export default Live;
