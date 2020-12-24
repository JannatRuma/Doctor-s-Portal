import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../../images/banner.png'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { appiontmentContext } from '../../context/AppointmentContext';

const AppointmentBanner = () => {
   const {handleDateChange} = useContext(appiontmentContext)
    return (
        <section className="banner">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={5} className="mb-4">
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </Col>
                    <Col md={2}></Col>
                    <Col xs={12} sm={12} md={5} className="banner-img">
                        <img src={banner} alt=""/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AppointmentBanner;