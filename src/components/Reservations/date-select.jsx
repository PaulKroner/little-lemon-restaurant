import './date-select.css'
import React, { useState, useRef } from 'react';

const ocassions = [
    {
        label: 'Birthday',
        value: 'birthday'
    },
    {
        label: 'Anniversary',
        value: 'anniversary'
    }

]

const DateSelect = (props) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toDateString());

    const dateRef = useRef(null);

    // split time and date into arrays based on delimiter
    const timeStr = time.toString().split(' ');
    const dateStr = date.toString().split(' ');

    let cafeStatus = 'Closed';

    // update time and date every 1000 milliseconds
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        setDate(new Date().toDateString());
    }, 1000);


    const hour = new Date().toTimeString().split(' ')[0].split(':');

    const startingTime = 8; // somehow 9 AM
    const closoingTime = 21; // 9 PM

    if (parseInt(hour[0]) > startingTime && parseInt(hour[0]) < closoingTime) {
        cafeStatus = 'Open';
    } else {
        cafeStatus = 'closed';
    }

    // get date value from input using useRef hook
    const handleClickedDate = () => {
        props.chooseDate(dateRef.current.value);
    }

    // get ocassion value from select option 
    const handleOcassionChange = (e) => {
        props.chooseOcassion(e.target.value);
    }

    return (
        <div>
            <div className="date-layout">
                <h1 className="date-heading">Date</h1>
                <div className="date-counter-layout">

                    <span className="date-display">
                        <div className="">
                            {
                                dateStr[2] + " " + dateStr[1] + " " + dateStr[3]
                            }
                        </div>

                        <div className="">
                            {
                                timeStr[0]
                            }
                        </div>
                    </span>

                </div>
            </div>

            <div className="cafestatus">
                <h1 className={`title ${cafeStatus} status`}>{cafeStatus}</h1>
            </div>

            {/* add date selector and ocassion selector */}
            {/* get date and ocassion values and pass to parent component */}
            <div className="choose-date">
                <input
                    ref={dateRef}
                    onChange={handleClickedDate}
                    type="date"
                    className="date-select" />
                {/* provide defalut value: theOcassion */}
                {/* ocassion value is comming from parent and then onchange, send data to parent */}
                <select className="occasion-select" value={props.ocassion} onChange={handleOcassionChange}>
                    {
                        ocassions.map((ocassion) => {
                            return (
                                <option value={ocassion.value}>
                                    {ocassion.label}
                                </option>
                            );
                        })
                    }
                </select>
            </div>
        </div>
    );
};

export default DateSelect;