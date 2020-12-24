import React from 'react';
import AppointmentHeader from '../components/Appointment/AppointmentHeader';
import BookAppointment from '../components/Appointment/BookAppointment';
import Footer from '../components/Home/Footer';

const AppointmentPage = () => {
    return (
        <div>
            <AppointmentHeader></AppointmentHeader>
            <BookAppointment></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default AppointmentPage;