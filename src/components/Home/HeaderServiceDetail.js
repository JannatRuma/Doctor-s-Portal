import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HeaderServiceDetail = ({item}) => {
    return (
        <div className={`headerServices__service-item color-${item.color}`}>
            <div className="headerServices__icon">
                <FontAwesomeIcon icon={item.icon} className="headerService__icon"/>
            </div>
            <div className="headerServices__description">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
            </div>
        </div>
    );
};

export default HeaderServiceDetail;