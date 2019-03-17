import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Logo from '../../public/images/intela.png'
import { Link } from "react-router-dom";
import './css/header.css'



class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Navbar collapseOnSelect expand="lg" >
                    <Navbar.Brand as={Link} to='/'><Image className="imgLogo" src={Logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="justify-content-end">                     
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;
