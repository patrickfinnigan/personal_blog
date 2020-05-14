import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class AppMainCard extends Component {
    render () {
        return (
            <Card className="mainCard">
                <Card.Body>This is the main card.</Card.Body>
            </Card>
        )
    }

}
export default AppMainCard