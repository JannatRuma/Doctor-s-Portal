import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import banner from '../../images/banner.png'
import {Link} from "react-router-dom";


const Banner = () => {
    return (
        <section className="banner">
            <Container>
                <Row>
                    <Col xs={12} sm={11} md={5}>
                        <h2>Your New Smile <br/> Start Here </h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque sint tempore quaerat quidem quo aspernatur illo corporis aliquam esse sed.</p>
                        <Link to="/appointment">
                             <Button className="common-btn">GET APPOINMENT</Button>
                        </Link>
                    </Col>
                    <Col sm={2} md={2}></Col>
                    <Col xs={12} sm={11} md={5} className="banner-img">
                        <img src={banner} alt=""/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;