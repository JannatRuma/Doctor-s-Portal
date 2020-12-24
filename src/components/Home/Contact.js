import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Container>
                <Row>
                    <Col className="contact__header">
                        <h5>Contact Us</h5>
                        <h3>Always Connected With Us</h3>
                    </Col>
                </Row>
                <Row>
                    <Form className="w-75 m-auto contact_form pt-5"> 
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Email Address*" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Subject*" />
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                             <Form.Control as="textarea" rows="3" placeholder="Write a Comment.." />
                        </Form.Group>

                        <Button className="common-btn">
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;