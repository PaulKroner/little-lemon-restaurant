import React, { useState } from "react";
import DateSelect from "./date-select";
import GuestSelect from "./guest-select";
import TimeSelect from "./time-select";

const Reservations = (props) => {
    const [time, setTime] = useState('00:00');
    const [guests, setGuests] = useState(1);
    const [date, setDate] = useState('');
    const [ocassion, setOccasion] = useState('birthday');
    
    const [reservation, setReservation] = useState({ guests: guests, date: '', time: '', ocassion: ocassion });

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // Submission happens here

        // props.submitReservation(reservation);
    }

    const chooseTime = (time) => {
        setTime(time);

        setReservation({ ...reservation, time: time });
    }

    // handler function in the Parent component
    const chooseGuest = (guests) => {
        setGuests(guests);
        setReservation({ ...reservation, guests: guests });
    }

    // handler function in the Parent component to get date selected from child ccomponent

    const chooseDate = (date) => {
        setDate(date);
        setReservation({ ...reservation, date: date });

        props.dispatchTimeslotsOnDateChange(date);
    }

    const chooseOcassion = (ocassion) => {
        setOccasion(ocassion);

        // reservationData['ocassion'] = ocassion;
        setReservation({ ...reservation, ocassion: ocassion });
    }

    const validateReservation = () => {
        // if (reservation.time !== '' &&
        //     reservation.date !== '' &&
        //     reservation.guests !== '' &&
        //     reservation.ocassion !== '') {
        //     return true;
        // }

        // return false;
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Reservations</h1>
            <GuestSelect chooseGuest={chooseGuest} />
            <DateSelect chooseDate={chooseDate} ocassion={ocassion} />
            <TimeSelect chooseTime={chooseTime} />

            { // Enable, Disable Submit button on form validation
                validateReservation() ? <button disabled={false}>Submit</button> : <button disabled={true}>Submit</button>
            }
        </form>
    );
}

export default Reservations;