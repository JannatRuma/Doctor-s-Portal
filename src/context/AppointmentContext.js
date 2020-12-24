import React, { createContext, useState } from 'react';
export const appiontmentContext = createContext();

const AppointmentContextProvider = ({children}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date)
    }
    return (
        <appiontmentContext.Provider value={{selectedDate, setSelectedDate,handleDateChange}}>
            {children}
        </appiontmentContext.Provider>
    );
};

export default AppointmentContextProvider;