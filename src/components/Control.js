// @flow

import React, { Component } from 'react';

import Scanner from './sidebar/Scanner';
import Register from './sidebar/Register';
import styles from './App.scss';

import view from '../../asset/image/view.png';
import register from '../../asset/image/register.png';

const activities = [
  { name: 'scanner', icon: view, component: <Scanner key="scanner" /> },
  { name: 'register', icon: register, component: <Register key="register" /> },
];

type State = {
  active: string,
};

class Control extends Component<{}, State> {
  constructor() {
    super();
    this.state = {
      active: '',
    };
  }

  onClick = (target: string) =>
    this.setState({ active: target === this.state.active ? '' : target });

  render() {
    const { active } = this.state;

    return (
      <div>
        <div className={styles.activitybar}>
          {
            activities.map(a => (
              <div
                className={styles.activity}
                style={{ maskImage: `url(${a.icon})`, backgroundColor: `${active === a.name ? '#a0a0a0' : ''}` }}
                onClick={() => this.onClick(a.name)}
                role="button"
                tabIndex={0}
                key={a.name}
              />
            ))
          }
        </div>
        <div className={`${styles.sidebar} ${active !== '' ? styles.show : ''}`}>
          {
            activities.filter(a => active === a.name).map(a => a.component)
          }
        </div>
      </div>
    );
  }
}

export default Control;
