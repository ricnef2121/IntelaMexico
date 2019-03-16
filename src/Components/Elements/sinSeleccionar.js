import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import './css/sinSeleccionar.css'


class SinSeleccionar extends Component {
    
   
    render() {
        return (
            <Card className="cardContent">
                <Card.Body className="cardBody">
                    <span>No has seleccionado un elemento</span>                    
                </Card.Body>
            </Card>
        )
    }
}

export default SinSeleccionar;