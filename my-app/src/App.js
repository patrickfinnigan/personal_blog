import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import AppNavbar from './Components/pagetemplate/navbar.js';
import AppJumbotron from './Components/pagetemplate/jumbotron';

// import Jumbotron from './Components/pagetemplate/jumbotron.js';

function App() {
  return (
    <Container xl={12}>
          <div className="App">
            <AppJumbotron />
            <AppNavbar />
          </div>
    </Container>
  );
}

export default App;
