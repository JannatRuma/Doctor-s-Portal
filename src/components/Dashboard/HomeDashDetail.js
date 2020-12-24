import React from 'react';
import { Button } from 'react-bootstrap';

const HomeDashDetail = ({item, index}) => {
    const handleDelete = (id) =>{
        fetch(`https://obscure-reaches-78019.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        }).then(res=>res.json())
        alert('Appointment Deleted SuccessFully!')
    }
    return (
         <tr>
            <td scope="row" data-label="sl. no">{index+1}</td>
            <td data-label="date">{new Date(item.date).toDateString()}</td>
            <td data-label="time">{item.time}</td>
            <td data-label="name">{item.name}</td>
            <td data-label="number">{item.number}</td>
            <td data-label="action">
              <Button className="btn-danger" onClick={()=>handleDelete(item._id)}>Delete</Button>
            </td>
          </tr>
    );
};

export default HomeDashDetail;