// @flow

import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Live from './Live';

import styles from './App.scss';

const Child = ({ ChildComponent, name }: { ChildComponent: any, name: string }) => (
  <div className={styles.child}>
    <div className={styles.title} label={name} />
    <ChildComponent />
  </div>
);

const routes = [
  {
    exact: true,
    path: '/',
    child: Dashboard,
    name: 'Dashboard',
  },
  {
    path: '/live',
    child: Live,
    name: 'Live',
  },
];

class App extends Component<{}> {
  render() {
    return (
      <div className={styles.wrapper}>
        <Sidebar />
        <HashRouter>
          <div>
            {
              routes.map(r => (
                <Route
                  {...r}
                  key={r.path}
                  render={() => (
                    <Child
                      ChildComponent={r.child}
                      name={r.name}
                    />
                  )}
                />
              ))
            }
          </div>
        </HashRouter>
      </div>
    );
  }
}


export default App;
