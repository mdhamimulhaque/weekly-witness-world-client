import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaWhatsappSquare, FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaClipboardList } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';


const RightSide = () => {
    return (
        <div>
            <section className="social_logIn_wrapper">
                <ButtonGroup vertical>
                    <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
                    <Button className='mb-2' variant="outline-dark"><FaGithub /> Login With Github</Button>
                </ButtonGroup>
            </section>

            <section className="social_links mt-4">
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebookSquare /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaWhatsappSquare /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item><FaTwitterSquare /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaLinkedin /> Linkedin</ListGroup.Item>
                    <ListGroup.Item><FaClipboardList /> Terms and conditions</ListGroup.Item>
                </ListGroup>
            </section>

            <div className="addb_banner mt-4 ">
                <BrandCarousel />
            </div>
        </div>
    );
};

export default RightSide;