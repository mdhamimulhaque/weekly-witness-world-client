import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='mb-5' style={{ cursor: "pointer" }}>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Link className='nav-link text-bold' to="/">Weekly Witness World</Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                        >
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to="/">News</Link>
                            <Link className='nav-link' to="/contact">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;