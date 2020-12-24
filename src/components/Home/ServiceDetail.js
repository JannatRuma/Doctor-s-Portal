import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="services__detail">
            <img src={service.image} alt=""/>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
        </div>
    );
};

export default ServiceDetail;