import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { Link, NavLink } from "react-router-dom";



class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand as={Link} to='/'>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="justify-content-end">
                      {
                          /**
                           *   <Nav defaultActiveKey={location.pathname}>
                            <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>                            
                        </Nav>
                           */
                      }
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;
