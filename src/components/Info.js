// @flow

import React, { Component } from 'react';

import styles from './App.scss';

type State = {
  pinned: boolean,
};

class Info extends Component<{}, State> {
  constructor() {
    super();
    this.state = {
      pinned: false,
    };
  }

  togglePin = () => {
    this.setState(prevState => ({ pinned: !prevState.pinned }));
  }

  render() {
    const { pinned } = this.state;

    return (
      <div className={`${styles.info} ${pinned ? styles.pinned : ''}`}>
        <div className={`${styles.pin} ${pinned ? styles.rotate : ''}`} onClick={this.togglePin} role="button" tabIndex={0} />
      </div>
    );
  }
}

export default Info;
