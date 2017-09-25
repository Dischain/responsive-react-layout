'use strict';

import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className={'navbar navbar-inverse navbar-fixed-top'}>
        <div className={'container'}>
          <div className={'navbar-header'}>
            <button type='button' className={'navbar-toggle collapsed'} 
                    dataToggle='collapse' dataTarger='#navbar-collapse'>
              <span className={'icon-bar'}></span>
              <span className={'icon-bar'}></span>
              <span className={'icon-bar'}></span>
            </button>
            <a className={'navbar-brand'} href='#'>Brand</a>
          </div>
          <div className={'navbar-collapse collapse'} id='navbar-collapse'>
            <ul className={'nav navbar-nav'}>
              <li className={'active'}>
                <a href='#'>Home</a>
              </li>
              <li className={'active'}>
                <a href='#'>About</a>
              </li>
              <li className={'active'}>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}