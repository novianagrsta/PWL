import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import StatefulComponent from './components/StatefulComponent';
import StatelessComponent from './components/StatelessComponent';

const App = () => {
 return (
    <Router>
      <Header />
      <MainContent />
      <StatefulComponent />
      <StatelessComponent />
      <Footer />
    </Router>
 );
};

export default App;