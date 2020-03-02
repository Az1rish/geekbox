import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__nav">
          <Nav />
        </header>
        <main className="App__main">
          <Switch>
            
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;