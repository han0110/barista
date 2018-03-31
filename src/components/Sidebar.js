// @flow
import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';

import styles from './App.scss';

const links = [
  {
    exact: true,
    to: '/',
    label: 'Dashboard',
  },
  {
    to: '/live',
    label: 'Live',
  },
];

const style = {
  fontWeight: 'bold',
  color: '#f0f0f0',
};

const Sidebar = () => (
  <div className={styles.sidebar}>
    <div className={styles.icon} label="Barista" />
    <HashRouter>
      <div className={styles.links}>
        {
          links.map(link => (
            <NavLink
              {...link}
              className={styles.link}
              activeStyle={style}
              key={link.to}
            />
          ))
        }
      </div>
    </HashRouter>
  </div>
);

export default Sidebar;
