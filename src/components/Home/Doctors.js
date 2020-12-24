import React from 'react';
import DoctorsDetail from './DoctorsDetail';
import doctor from '../../images/doctor-sm.png';
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Doctors = () => {
    const doctorsData = [
        {
            id:1,
            image: doctor,
            name: 'Dr. Caudi',
            icon: faPhone,
            phone: '+88 0197171717'
        },
        {
            id:2,
            image: doctor,
            name: 'Dr. Caudi',
            icon: faPhone,
            phone: '+88 0197171717'
        },
        {
            id:3,
            image: doctor,
            name: 'Dr. Caudi',
            icon: faPhone,
            phone: '+88 0197171717'
        },
    ]
    return (
        <section className="doctors">
            <div className="container">
                <div className="doctors-header">
                    <h3>Our Doctors</h3>
                </div>
                <div className="doctors-main">
                    {
                        doctorsData.map(item=> <DoctorsDetail doctor={item} key={item.id}></DoctorsDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;