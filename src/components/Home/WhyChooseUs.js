import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import baby from '../../images/baby.png'

const WhyChooseUs = () => {
    return (
        <section className="whychooseus" id="about">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={{span:5, offset:1}} className="whychooseus__img">
                        <img src={baby} alt=""/>
                    </Col>
                    <Col xs={12} sm={12} md={{span:5, offset:1}} className="whychooseus__details">
                        <h2>Exceptional Dental <br/> Care, on Your Terms</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, ea tempora! Corrupti rerum delectus beatae possimus. At voluptatum quis minima, voluptas ut ipsum vitae placeat numquam delectus error. Sed a velit iusto, labore magni impedit commodi quibusdam laborum ducimus ipsum delectus, suscipit repudiandae accusantium ex, doloribus doloremque eos aperiam exercitationem modi!</p>
                        <Button className="common-btn">Learn More</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhyChooseUs;