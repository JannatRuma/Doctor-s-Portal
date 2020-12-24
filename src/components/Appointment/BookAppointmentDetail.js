import React from 'react';
import { Button } from 'react-bootstrap';
import AppointmentModal from './AppointmentModal';

const BookAppointmentDetail = ({booking}) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
 
    function closeModal(){
        setIsOpen(false);
    }
    return (
        <div className="bookAppointment__card">
            <h3>{booking.subject}</h3>
            <h4>{booking.visitingHour}</h4>
            <p>{booking.totalSpace} Spaces Available</p>
            <Button onClick={openModal} className="common-btn">Book Appoinment</Button>
            <AppointmentModal modalIsOpen={modalIsOpen} appointmentTime={booking.visitingHour} appointmentOn={booking.subject} closeModal={closeModal}></AppointmentModal>
        </div>
    );
};

export default BookAppointmentDetail;