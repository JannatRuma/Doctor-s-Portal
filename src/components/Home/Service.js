import React from 'react';
import dental  from '../../images/dental.png'
import tooth  from '../../images/tooth.png'
import filling  from '../../images/filling.png'
import ServiceDetail from './ServiceDetail';
const Service = () => {
    const serviceData = [
        {
            id: 1,
            image: dental,
            title: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit optio aut deserunt saepe ab suscipit'

        },
        {
            id:2,
            image: filling,
            title: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit optio aut deserunt saepe ab suscipit'

        },
        {
            id:3,
            image: tooth,
            title: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit optio aut deserunt saepe ab suscipit'

        }
        
    ]
    return (
        <section className="services" id="dental">
            <div className="container">
                <div className="services__subHeading">
                    <h6>Our Services</h6>
                </div>
                <div className="services__mainHeading">
                    <h3>Services we provide</h3>
                </div>
                <div className="services__items">
                    {
                        serviceData.map(item=> <ServiceDetail service={item} key={item.id}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;