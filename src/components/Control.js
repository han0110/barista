// @flow

import React, { Component } from 'react';

import Scanner from './sidebar/Scanner';
import Register from './sidebar/Register';
import styles from './App.scss';

import scanner from '../../asset/image/scanner.png';
import register from '../../asset/image/register.png';

const activities = [
  { name: 'scanner', icon: scanner, SidebarComponent: Scanner },
  { name: 'register', icon: register, SidebarComponent: Register },
];

type State = {
  active: string,
  objects: Array<Object>,
};

class Control extends Component<{}, State> {
  constructor() {
    super();
    this.state = {
      active: '',
      objects: [
        { name: 'apple', id: 'ub12d' },
        { name: 'banana', id: 'd52l1' },
        { name: 'orange', id: 'of1fm' },
      ],
    };
  }

  getProps = (name: string) => {
    const props = {
      scanner: { objects: this.state.objects },
      register: {},
    };

    return props[name];
  }

  onClick = (target: string) =>
    this.setState({ active: target === this.state.active ? '' : target });

  render() {
    const { active } = this.state;
    const { onClick, getProps } = this;

    return (
      <div className={styles.control}>
        <div className={styles.activitybar}>
          {
            activities.map(({ name, icon }) => (
              <div
                className={styles.activity}
                style={{ maskImage: `url(${icon})`, backgroundColor: `${active === name ? '#a0a0a0' : ''}` }}
                onClick={() => onClick(name)}
                role="button"
                tabIndex={0}
                key={name}
              />
            ))
          }
        </div>
        <div className={`${styles.sidebar} ${active !== '' ? styles.show : ''}`}>
          {
            activities.map(({ name, SidebarComponent }) => (
              <div style={{ display: active === name ? 'flex' : 'none' }} key={name}>
                <SidebarComponent {...getProps(name)} />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Control;
