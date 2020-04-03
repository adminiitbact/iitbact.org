import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import WhoAreWe from './components/whoarewe';
import WhatCanYouDo from './components/whatcanyoudo';
import Initiatives from './components/initiatives';
import WhoCanJoinUs from './components/whoCanJoinUs';
import Sidebar from './components/sidebar';
import Contact from './components/contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNav: false,
      home: true,
      initiative: false,
      whatCanYouDo: false,
      whoCanJoin: false,
      contact: false
    }
  }

  handleDrawerOpen = () => {
    this.setState({ sideNav: !this.state.sideNav })
  }
  scroll = (param) => {
    console.log('pa',param)
    switch (param) {
      case 'home': this.setState({
        home: true,
        initiative: false,
        whatCanYouDo: false,
        whoCanJoin: false,
        contact: false
      },()=> window.scrollTo(0,document.getElementById('WhoAreWe').offsetTop-60)); break;
      case 'initiative': this.setState({
        home: false,
        initiative: true,
        whatCanYouDo: false,
        whoCanJoin: false,
        contact: false
      },()=> window.scrollTo(0,document.getElementById('initiatives').offsetTop-60)); break;
      case 'whatCanYouDo': this.setState({
        home: false,
        initiative: false,
        whatCanYouDo: true,
        whoCanJoin: false,
        contact: false
      },()=> window.scrollTo(0,document.getElementById('whatCanYouDo').offsetTop)-80); break;
      case 'whoCanJoin': this.setState({
        home: false,
        initiative: false,
        whatCanYouDo: false,
        whoCanJoin: true,
        contact: false
      },()=> window.scrollTo(0,document.getElementById('whoCanJoinUs').offsetTop-60)); break;
      case 'contact': this.setState({
        home: false,
        initiative: false,
        whatCanYouDo: false,
        whoCanJoin: false,
        contact: true
      },()=> window.scrollTo(0,document.getElementById('contact').offsetTop-60)); break;

    }
   
  }
  render() {
    return (
      <div id="App">
        <div id="sideNavContainer">
          <Sidebar sideNav={this.state.sideNav} handleDrawerOpen={this.handleDrawerOpen} scroll={this.scroll} state={this.state} />
        </div>
        <Header handleDrawerOpen={this.handleDrawerOpen} scroll={this.scroll} state={this.state} />
        <WhoAreWe />
        <Initiatives />
        <WhoCanJoinUs />
        <WhatCanYouDo />
        <Contact />

      </div>
    );
  }

}

export default App;
