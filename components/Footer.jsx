'use strict';

import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className={'footer'}>
        <p className={'text-muted'}>Footer</p>
      </footer>
    );
  }
}