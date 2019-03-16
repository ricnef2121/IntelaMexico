import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image';
import garbage from '../../public/images/garbage.png';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './css/itemList.css'

import {deleteElement,selectElement} from '../../Store/actions/actions-elements'

function mapDispatchToProps(dispatch) {
    return {
        deleteElement: element => dispatch(deleteElement(element)),
        selectElement: elementse => dispatch(selectElement(elementse))
    };
}


class ItemList extends Component {
    static propsTypes = {
        elements: PropTypes.object.isRequired,
        deleteElement: PropTypes.func.isRequired
    }
    constructor(){
        super();
        
        this.deletesub = this.deletesub.bind(this);
        this.selectElement = this.selectElement.bind(this);
    }
    
    deletesub = (e)=>{       
        this.props.deleteElement(e)
    }
  
    selectElement(e) {
        this.props.selectElement(e)           
    }

    render() {
        let { elements } = this.props;
        return (
            <Card className="cardFather">
                <Card.Body style={{height:'100%'}}>
                    {elements.length < 1 ?
                        <span>No hay elementos, haz click en el boton  de abajo  para crear un elemento</span>
                        : (elements.map(el => (
                            <Card key={el.id} className="CardItem">
                                <Card.Body className="cardbody">
                                    <Row className="row1">
                                        <Col md={8} className="name" >
                                        <Link to={`/addElement/${el.id}`}>
                                        <button className="buttonDelete"
                                        onClick={()=>this.selectElement(el.id)}
                                        > {el.name}</button>
                                        </Link>
                                        </Col>
                                        <Col md={4} className="img" >
                                            <button className="buttonDelete"
                                            onClick={()=>this.deletesub(el.id)}
                                            ><Image src={garbage}/></button>
                                        </Col>

                                    </Row>
                                </Card.Body>
                            </Card>
                        )
                        ))
                    }
                </Card.Body>
                <Card.Footer className="footerCard">
                    <Link to="/addElement">
                        <Button className="buttonAddElements"
                            variant="secondary" >
                            agregar
                    </Button>
                    </Link>
                </Card.Footer>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return { elements: state.elements};
}

const List = connect(mapStateToProps,mapDispatchToProps)(ItemList);

export default List;