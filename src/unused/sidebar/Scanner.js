// @flow

import React from 'react';

import styles from './Sidebar.scss';

type Props = {
  objects: Array<Object>,
};

const Scanner = ({ objects = [{}] }: Props) => (
  <div className={styles.wrapper}>
    <div className={styles.header} content="scanner" />
    {
      objects.map(({ id, name }) => (
        <div key={id} className={styles.object}>{name}</div>
      ))
    }
  </div>
);

export default Scanner;
