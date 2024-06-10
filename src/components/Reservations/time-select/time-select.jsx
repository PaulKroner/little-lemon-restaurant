import './time-select.css';
import React, { useState } from 'react';


const TimeSelect = (props) => {

    const [selectedTime, setSelectedTime] = useState(null);

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
        props.chooseTime(event.target.value);
    };

    return (
        <div className="reservation__time-selector d-flex flex-row justify-content-center">
            <label className="radio">
                <input
                    type="radio"
                    value="09:00"
                    checked={selectedTime === "09:00"}
                    onChange={handleTimeChange}
                />
                09:00
            </label>
            <label className="radio">
                <input
                    type="radio"
                    value="12:00"
                    checked={selectedTime === "12:00"}
                    onChange={handleTimeChange}
                />
                12:00
            </label>
            <label className="radio">
                <input
                    type="radio"
                    value="15:00"
                    checked={selectedTime === "15:00"}
                    onChange={handleTimeChange}
                />
                15:00
            </label>
            <label className="radio">
                <input
                    type="radio"
                    value="18:00"
                    checked={selectedTime === "18:00"}
                    onChange={handleTimeChange}
                />
                18:00
            </label>

        </div>
    );
};

export default TimeSelect;