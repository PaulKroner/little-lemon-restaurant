// import './TimeSelector.css';
import React, { useState } from 'react';

// const TimeCapsule = (props) => {

//     // get the current time value  and pass to parent component
//     const handleRadioChage = (e) => {
//         props.chooseTime(e.target.value);
//     }


//     return (
//             <div>
//                 <h1>{props.morning}</h1>
//                 <div className='timeslots-capsules' >
//                 {
//                     props.slots.map((item) => {
//                         return (
//                         <span className='radio-lablel-box'>
//                             <label htmlFor={item} className='radio-btn-label'>
//                                 <input type="radio" name="timeslots-m" id={item} value={item} onClick={handleRadioChage} />
//                                 {item}
//                             </label>
//                         </span>)
//                     })
//                 }
//                 </div>
//             </div> 
//     );
// }

const TimeSelect = (props) => {

    const [selectedTime, setSelectedTime] = useState(null);

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    return (
        <div className="">
            <label>
                <input
                    type="radio"
                    value="09:00"
                    checked={selectedTime === "09:00"}
                    onChange={handleTimeChange}
                />
                09:00
            </label>
            <label>
                <input
                    type="radio"
                    value="12:00"
                    checked={selectedTime === "12:00"}
                    onChange={handleTimeChange}
                />
                12:00
            </label>
            <label>
                <input
                    type="radio"
                    value="15:00"
                    checked={selectedTime === "15:00"}
                    onChange={handleTimeChange}
                />
                15:00
            </label>
            <label>
                <input
                    type="radio"
                    value="18:00"
                    checked={selectedTime === "18:00"}
                    onChange={handleTimeChange}
                />
                18:00
            </label>
            {/* {
                (isMorning && ( <TimeCapsule chooseTime={props.chooseTime} morning="Morning" slots={props.availableTimeSlots.morning} /> ))

                ||

                (isAfternoon && ( <TimeCapsule chooseTime={props.chooseTime} morning="Afternoon" slots={props.availableTimeSlots.afternoon}/>))

                ||

                (isEvening && ( <TimeCapsule chooseTime={props.chooseTime} morning="Evening" slots={props.availableTimeSlots.evening}/> ))

            } */}
        </div>
    );
};

export default TimeSelect;
