//dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/body.css'

//Components
import ItemList from '../Elements/itemList'
import SinSeleccionar from '../Elements/sinSeleccionar'

class Body extends Component {
    static propTypes = {
        body: PropTypes.object.isRequired
    }
    render() {
        const {body} = this.props;
        return ( 

            <div className="bodystyle">
                <Col md={12} className="colPadre">
                    <Row className="rowBody">
                        <Col md={3}>
                        <ItemList></ItemList>
                        </Col>
                        
                        <Col md={9}>
                           {body}                         
                        </Col>
                    </Row>

                </Col>
            </div>



        )
    }
}

export default Body;