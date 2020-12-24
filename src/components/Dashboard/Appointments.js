import React, { useContext, useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { Col, Container, Row } from 'react-bootstrap';
import { appiontmentContext } from '../../context/AppointmentContext';
import AppointmentsByDate from './AppointmentsByDate';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const {selectedDate,handleDateChange} = useContext(appiontmentContext)


     useEffect(() => {
        fetch('https://obscure-reaches-78019.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])
    return (
       <Container>
            <Row>
                <Col xs={12} sm={12} md={5} className="extra-small-width mb-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </Col>
                <Col md={1}></Col>
                <Col xs={12} sm={12} md={6} className="extra-small-width">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </Col>
            </Row>
        </Container>
    );
};

export default Appointments;