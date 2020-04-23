import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import AppJumbotron from './Components/pagetemplate/jumbotron';
import AppNavbar from './Components/pagetemplate/navbar';
import AppMainCard from './Components/pagetemplate/maincard';
import AppSideCard from './Components/pagetemplate/sidecard';
import AppFooter from './Components/pagetemplate/footer';

// import Card from 'react-bootstrap/Card'

// import Jumbotron from './Components/pagetemplate/jumbotron.js';

function App() {
  return (
    <Container className="App">
      <AppJumbotron />
      <AppNavbar />
      <AppMainCard />
      <AppSideCard />
      <AppFooter />
    </Container>
  );
}

export default App;
