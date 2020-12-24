import React from 'react';
import Header from '../Home/Header';
import AppointmentBanner from './AppointmentBanner';

const AppointmentHeader = () => {
    return (
        <div className="headerBackground">
            <Header></Header>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default AppointmentHeader;