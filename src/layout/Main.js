import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSide from '../Pages/Shared/LeftSide/LeftSide';
import RightSide from '../Pages/Shared/RightSide/RightSide';


const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg="2">
                        <LeftSide />
                    </Col>
                    <Col lg="7">
                        <Outlet />
                    </Col>
                    <Col lg="3">
                        <RightSide />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;