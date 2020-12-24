import React from 'react';
import HeaderServiceDetail from './HeaderServiceDetail';
import { faPhone, faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons'

const HeaderServices = () => {
    const serviceData = [
        {
            id:1,
            title: "Openong Hours",
            description: "Every Morning 8.00am",
            icon: faPhone,
            color: "light"
        },
        {
            id:2,
            title: "Visit Our Location",
            description: "119, Demra, Dhaka",
            icon: faMapMarker,
            color: "dark"
        },
        {
            id:3,
            title: "Contact us Now",
            description: "+88 01977777737",
            icon: faClock,
            color: "light"
        }
    ]
    return (
        <div className="headerServices">
            <div className="container">
                <div className="headerServices__service">
                    {
                        serviceData.map(item=> <HeaderServiceDetail item={item} key={item.id}></HeaderServiceDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HeaderServices;