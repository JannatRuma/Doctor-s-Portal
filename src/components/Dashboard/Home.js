import React, { useEffect, useState } from 'react';
import HomeDashDetail from './HomeDashDetail';
const Home = () => {
  const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('https://obscure-reaches-78019.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="appointment-counter">
        <div className="today-appointMent">
          <h2>1</h2>
          <p>Today's Appointments</p>
        </div>
        <div className="total-appointMent">
          <h2>{appointments.length}</h2>
          <p>Total Appointments</p>
        </div>
        <div className="total-patient">
          <h2>{appointments.length}</h2>
          <p>Total Patient</p>
        </div>
      </div>

      <div className="table">
        <table>
        <caption>Appointments Summary</caption>
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Name</th>
            <th scope="col">Contact</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            appointments.map((item,i)=><HomeDashDetail item={item} key={item._id} index={i}></HomeDashDetail>)
          }
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Home;