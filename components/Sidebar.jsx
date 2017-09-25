'use strict';

import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'sidebar-offcanvas'} id='sidebar'>
        <div className={'col-md-12'}>
          <h3>Sidebar</h3>
          <ul className={'nav nav-pills nav-stacked'}>
            <li className={'active'}>
              <a href='#'>Section1</a>
            </li>
            <li>
              <a href='#'>Section2</a>
            </li>
            <li>
              <a href='#'>Section2</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}