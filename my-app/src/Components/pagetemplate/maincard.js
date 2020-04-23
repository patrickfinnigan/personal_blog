import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class AppMainCard extends Component {
    render () {
        return (

        <Container>
            <Row>
                <Col xs lg={7}>
                    <Card className="sideCard">
                        <Card.Body>This is the main card.</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>


        )
    }

}
export default AppMainCard