import React, { useEffect, useState } from 'react';
import PatientDetail from './PatientDetail';

const Patients = () => {
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        fetch('https://obscure-reaches-78019.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setPatients(data))
    }, [])
    return (
        <div>
            <h2>All Patients</h2>

            <div className="table">
                <table>
                <caption>Patient Summary</caption>
                <thead>
                <tr>
                    <th scope="col">Sr. No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Age</th>
                    <th scope="col">Weigth</th>
                    <th scope="col">Contact</th>
                </tr>
                </thead>
                <tbody>
                {
                    patients.map((item,i)=><PatientDetail item={item} key={item._id} index={i}></PatientDetail>)
                }
                </tbody>
            </table>
            </div>
            </div>
    );
};

export default Patients;