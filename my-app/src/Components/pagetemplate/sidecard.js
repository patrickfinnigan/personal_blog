import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class AppSideCard extends Component {
    render () {
        return (

        <Container>
            <Row>
                <Col xs lg={4}>
                    <Card className="mainCard">
                        <Card.Body>This is the side card.</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>


        )
    }

}
export default AppSideCard