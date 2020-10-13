import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../image/logo2.png'
import "./Header.css"
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Header = () => {
    const databaseFood=getDatabaseCart()
    const foodKey=Object.keys(databaseFood);

    return (
        <Container>
            <Navbar  expand="lg">
            <Link to="/"><img src={logo} alt="" className="logo"/></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link className="" href="#home"><FaShoppingCart/> <small>{foodKey.length}</small></Nav.Link>
                <Link to="/login">Login</Link>
                <Link to="/checkout"><Button variant="danger" className="rounded-pill">Sing Up</Button></Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;