import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Gallery from './components/gallery/Gallery';
import Contact from './components/Contact.js';
import Calendar from './components/Calendar';
import Bracket from './components/bracket.js';
import Footer from './components/Footer';
import Signup from './components/Signup';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
              <Route path="/" exact element={<Homepage />} />
              <Route path="/signup" exact element={<Signup />} />
              <Route path="/bracket" exact element={<Bracket />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="/gallery" exact element={<Gallery />} />
              <Route path="/calendar" exact element={<Calendar />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;