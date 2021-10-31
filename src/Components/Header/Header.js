import {faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
           <Navbar bg="light" variant="light" sticky="top" expand="lg">
                <Container>
                <Navbar.Brand><Link to="/home"><FontAwesomeIcon icon={faHamburger}/> Foodies!</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                <Nav.Link><Link to="/items">Items</Link></Nav.Link>
                <Nav.Link><Link to="/pricing">Pricing</Link></Nav.Link>
                {
                    user.email && <Nav.Link><Link to="/add-items">Add-Items</Link></Nav.Link> 
                }
                {
                    user.email && <Nav.Link><Link to="/manage-orders">Manage-Orders</Link></Nav.Link> 
                }
                {
                    user.email && <Nav.Link><Link to="/my-orders">My-Orders</Link></Nav.Link> 
                }
                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                </Nav>
                
                {
                    user?.email ? 
                    <div className="logout-user d-flex">
                        <Nav.Link><Link to="/home">{user.displayName}</Link></Nav.Link>
                        <button className="btn btn-outline-primary" onClick={logOut}>LogOut</button>
                    </div> 
                :
                <div className="login-reg d-flex">
                <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                <Nav.Link><Link to="/register">Register</Link></Nav.Link>
                </div>
                }
                </Navbar.Collapse>
                
               
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;