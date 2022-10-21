import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { FaMehRollingEyes } from "react-icons/fa";
import { Button } from 'react-bootstrap';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("logout successfully")
            }).catch((error) => {
                console.log(error)
            });

    }
    return (
        <header className='mb-5' style={{ cursor: "pointer" }}>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Link className='nav-link text-bold' to="/">Weekly Witness World</Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mx-auto my-2 my-lg-0">
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to="/">News</Link>
                            <Link className='nav-link' to="/contact">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="user_info">
                        {user?.photoURL ?
                            <img style={{ height: "30px", width: "30px", borderRadius: "50%" }} src={user?.photoURL} alt="" />
                            : <FaMehRollingEyes />
                        }

                        {
                            user?.uid ?
                                <>
                                    <span className='ms-2'>{user?.displayName}</span>
                                    <Button className='ms-2' onClick={handleLogOut} variant="danger" size="sm">
                                        Log Out
                                    </Button>
                                </>
                                : <>
                                    <Link to="/registration"><Button className='mx-1 text-white' variant="info" size="sm">Registration</Button></Link>
                                    <Link to="/login"><Button className='mx-1 text-white' variant="info" size="sm">Log In</Button></Link>
                                </>
                        }
                    </div>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;