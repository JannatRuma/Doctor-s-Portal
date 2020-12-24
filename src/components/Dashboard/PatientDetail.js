import React from 'react';

const PatientDetail = ({item, index}) => {
    console.log(item);
    return (
        <tr>
            <td scope="row" data-label="sl. no">{index+1}</td>
            <td data-label="name">{item.name}</td>
            <td data-label="gender">{item.gender}</td>
            <td data-label="age">{item.age}</td>
            <td data-label="weight">{item.weight}</td>
            <td data-label="number">{item.number}</td>
        </tr>        
    );
};

export default PatientDetail;