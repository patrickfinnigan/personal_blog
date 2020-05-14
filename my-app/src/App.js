import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
        <Row>
          <Col xs lg={8}>
            <AppMainCard />
          </Col>
          <Col xs lg={4}>
            <AppSideCard />
          </Col>
        </Row>
        <Row>
          <Col xs lg={12}>
            <AppFooter />
          </Col>
        </Row>
    </Container>
  );
}

export default App;
