import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {Link, useLocation} from "react-router-dom";
import { userContext } from '../../context/UserContext';

const Header = () => {
    const location = useLocation();
    const { user, signOUtUser  } = useContext(userContext)
    return (
        <Navbar expand="lg" className="nav-bar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggole"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                   <Nav.Link as={Link} to="/" className="mr-4">Home</Nav.Link>
                   {
                       location.pathname === '/' ? (
                           <>

                            <Nav.Link href="#dental" className="mr-4">Dental Services</Nav.Link>
                            <Nav.Link href="#about" className="mr-4">About</Nav.Link>
                            <Nav.Link href="#reviews" className="mr-4">Reviews</Nav.Link>
                            <Nav.Link href="#blog" className="mr-4">Blog</Nav.Link>
                            <Nav.Link href="#contact" className="mr-4">Contact Us</Nav.Link>
                           </>
                       ) : (
                           ''
                       )
                   }
                 {user ? (
                    <>
                        <Nav.Link  className="mr-4 text-white" onClick={signOUtUser} >Logout {user.name.split(' ')[0]}</Nav.Link>
                    </>
                ) : (
                    <Nav.Link as={Link}  className="mr-4 text-white" to="/login">Login</Nav.Link>
                )}
                    <Nav.Link as={Link} className="mr-4 text-white" to="/dashboard">Dashboard</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;