import React, { Component } from 'react';
// import './App.css';
import Header from './components/header/Header'
import Navigation from './Navigation'

class App extends Component {
  render() {
    return (

      <React.Fragment>
        <div className="scrollToTop circle"><i class="fa fa-angle-up"></i></div>

        <div className="page-wrapper">
          <Header />
          <Navigation />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
