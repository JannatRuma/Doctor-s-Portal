import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <section className="footer">
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <h3>Our Activities</h3>
                             <li>Tooth Extraction</li>
                            <li>Check Up</li>
                            <li>Emergency Dental Care</li>
                             <li>Emergency Dental Care</li>
                            <li>Check Up</li>
                        </ul>
                    </Col>
                        <Col>
                            <ul>
                                <h3>Our Services</h3>
                                <li>Emergency Dental Care</li>
                                <li>Check Up</li>
                                <li>Tooth Extraction</li>
                                <li>Check Up</li>
                                <li>Emergency Dental Care</li>
                            </ul>
                        </Col>
                    <Col>
                        <ul>
                            <h3>Oral helth</h3>
                            <li>Your Location</li>
                            <li>Emergency Dental Care</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                            <li>Tooth Extraction</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <h3>Our Location</h3>
                            <li>121/123, Dhanmandi 4, Dhaka</li>
                            <br/><br/>
                             <li>Call Now</li>
                             <Button className="common-btn">+88 019712341</Button>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col className="footer-sm">
                        <p>Copyright {(new Date()).getFullYear()} all right reserve</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;