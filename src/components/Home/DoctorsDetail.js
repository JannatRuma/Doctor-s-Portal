import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DoctorsDetail = ({doctor}) => {
    return (
        <div className="doctors-detail">
            <img src={doctor.image} alt=""/>
            <h3>{doctor.name}</h3>
            <div className="doctors__phone">
                 <p><FontAwesomeIcon icon={doctor.icon} /></p>
                 <p>{doctor.phone}</p>
            </div>
        </div>
    );
};

export default DoctorsDetail;