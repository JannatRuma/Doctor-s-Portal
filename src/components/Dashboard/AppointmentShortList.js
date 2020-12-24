import React from 'react';

const AppointmentShortList = ({ appointments }) => {
    return (
        <div className="table">
            <table>
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Email</th>
                </tr>
                </thead>
                <tbody>
                {
                    appointments.map((appointment, index) => 
                        
                    <tr key={index}>
                        <td data-label="name">{appointment.name}</td>
                        <td data-label="number">{appointment.number}</td>
                        <td data-label="email">{appointment.email}</td>
                    </tr>
                    )
                }
                </tbody>
            </table>
      </div>
    );
};

export default AppointmentShortList;