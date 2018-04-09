import React, { Component } from 'react';
import io from 'socket.io-client';

import config from '../../share/config';
import styles from './Dashboard.scss';

class Dashboard extends Component {
  socket: io;

  constructor() {
    super();
    this.state = {
      beans: [],
    };
    this.socketInit();
  }

  socketInit = () => {
    this.socket = io(`localhost:${config.socketPort}`);

    this.socket.on('beans', (data) => {
      const img = `data:image/jpeg;base64,${data.img}`;
      const time = new Date(data.time).toTimeString().split(' ')[0];

      this.setState(prevState => ({
        beans: prevState.beans.concat({ ...data, time, img, show: false }),
      }));
    });
  }

  toggle = (id: number) => {
    const { beans } = this.state;

    for (let i = 0; i < beans.length; i += 1) {
      if (beans[i].id === id) {
        beans[i].show = !beans[i].show;
        break;
      }
    }

    this.setState({ beans });
  }

  render() {
    const { beans } = this.state;
    const total = beans.length;
    const good = beans.filter(b => b.status === 'good').length;
    const bad = beans.filter(b => b.status === 'bad').length;

    return (
      <div className={styles.wrapper}>
        <div className={styles.sum} label="total">
          <div className={styles.bar} label={total} style={{ color: '#000' }} />
        </div>
        <div className={styles.sum} label="good" style={{ color: '#66CC99' }}>
          <div className={styles.bar} label={good} />
        </div>
        <div className={styles.sum} label="bad" style={{ color: '#E74C3C' }}>
          <div className={styles.bar} label={bad} />
        </div>
        <div className={styles.list}>
          <div className={styles.label}>
            <div label="ID" />
            <div label="TIME" />
            <div label="STATUS" />
          </div>
          {
            beans.map(b => (
              <div
                className={b.show ? styles.spread : styles.item}
                key={b.time}
                onClick={() => this.toggle(b.id)}
                role="button"
                tabIndex={0}
              >
                {b.show ? <img className={styles.image} src={b.img} alt="bean" /> : <div style={{ display: 'none' }} />}
                <div style={{ display: b.show ? '' : 'none' }}>Id：</div><div>{b.id}</div>
                <div style={{ display: b.show ? '' : 'none' }}>Time：</div><div>{b.time}</div>
                <div style={{ display: b.show ? '' : 'none' }}>Status：</div><div>{b.status}</div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Dashboard;
