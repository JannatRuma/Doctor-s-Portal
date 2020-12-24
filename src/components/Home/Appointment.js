import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import doctor from '../../images/doctor.png'

const Appointment = () => {
    return (
        <section className="appointment">
            <Container>
                <Row>
                    <Col md={{span:3, offset:1}} className="appointment__image">
                        <img src={doctor} alt=""/>
                    </Col>
                    <Col xs={12} sm={12} md={{span:7, offset:1}} className="appointment__detail">
                        <h6>Appointment</h6>
                        <h3>Make an Appointment Today</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nobis quas tempora, cupiditate non fugit.</p>
                        <Link to="/appointment">
                            <Button className="common-btn">Make an Appointment</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Appointment;