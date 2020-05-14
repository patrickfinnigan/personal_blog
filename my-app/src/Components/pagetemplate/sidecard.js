import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class AppSideCard extends Component {
    render () {
        return (
            <Card className="sideCard">
                <Card.Body>This is the side card.</Card.Body>
            </Card>
        )
    }

}
export default AppSideCard