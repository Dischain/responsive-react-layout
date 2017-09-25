'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'row-offcanvas row-offcanvas-left'}>
        <Navbar />
        <Sidebar />
        <div id='main'>
          <div className={'col-md-12'}>
            <h3>Fixed navbar + fixed sidebar on Bootstrap and React.js</h3>              
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}