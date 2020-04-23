import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class AppFooter extends Component {
    render () {
        return (

        <Container>
            <Row>
                <Col xs lg={12}>
                    <Card className="footer">
                        <Card.Body>This is the footer.</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        )
    }

}
export default AppFooter