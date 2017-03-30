import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />

      <div className="site">
        <Route exact path="/" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
      </div>

      <Footer />
    </div>
  </Router>

);

export default App;
