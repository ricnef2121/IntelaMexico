import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import uuidv1 from 'uuid';
import { Link,Redirect } from 'react-router-dom'
import './css/addElement.css'

import { addElement,updateElement } from '../../Store/actions/actions-elements'




function mapDispatchToProps(dispatch) {
    return {
        addElement: element => dispatch(addElement(element)),
        updateElement: (id,element) => dispatch(updateElement(id,element))
        
    };
}

class AddElement extends Component {
    static propsTypes = {
        elementSelected: PropTypes.object.isRequired,
        addElement: PropTypes.func.isRequired,
        updateElement: PropTypes.func.isRequired
    }

    constructor() {
        super();
        this.state={
            redirect:false
        }

        this.state = {
            id:null,
            name: '',
            description: '',
            title:'Estas agregando un nuevo elemento'
        };
        this.handleChange = this.handleChange.bind(this);
        this.hanldeSubmit = this.hanldeSubmit.bind(this);
    }

    componentWillMount() {        
        const { match: { params } } = this.props;
        const id = Object.keys(params).length;
        if (id > 0) {                        
            let {elementSelected} = this.props;
            let element = elementSelected[0];
            let title ="Estás editando un elemento"
            this.setState({
                id : element.id,
                name:element.name,
                description:element.description,
                title:title
            })           
        } else {
            return
        }
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    hanldeSubmit(e) {
        event.preventDefault();
        const { id,name, description } = this.state;        
        if (name.length > 0 && description.length > 0 && id<1) {
            const id = uuidv1();
            const element = {
                id: id,
                name: name,
                description: description
            }
            this.props.addElement(element);
            this.setState({ name: '', description: '',redirect:true})           
        }else{
            const element = {
                id:id,
                name:name,
                description:description
            }
            this.props.updateElement(id,element);
            this.setState({id:null, name: '', description: '',redirect:true})
        }
    }


    render() {
        if(this.state.redirect){
           return <Redirect to='/'/>
        }
        const { name, description } = this.state;
        return (
            <Card className="cardContentAddElement">
                <Card.Body className="cardBodyAddElement">

                    <Row>
                        <Col md={12} className="ColTitle">
                            <h2>{this.state.title}</h2>

                        </Col>
                        <Col md={12}>
                            <Form onSubmit={this.hanldeSubmit}>
                                <Form.Group >
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control id="name" type="text"
                                        value={name}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Descripcion</Form.Label>
                                    <Form.Control as="textarea" rows="3" id="description"
                                        value={description}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Col md={4} className="ColButtoms">
                                    <Link to="/">
                                        <Button variant="secondary" >
                                            Cancelar
                                    </Button>
                                    </Link>

                                    <Button type="submit">
                                        Crear
                                    </Button>
                                </Col>

                            </Form>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        )
    }
}
const mapStateToProps = state => {
    return { elementSelected: state.elementSelected };
}
const Formcon = connect(mapStateToProps, mapDispatchToProps)(AddElement);

export default Formcon;