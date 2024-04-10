import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DateSelect from "./date-select";
import GuestSelect from "./guest-select";
import TimeSelect from "./time-select";

const Reservations = (props) => {
    const [time, setTime] = useState('00:00');
    const [guests, setGuests] = useState(1);
    const [date, setDate] = useState('');
    const [ocassion, setOccasion] = useState('birthday');

    const [reservation, setReservation] = useState({ guests: guests, date: '', time: '', ocassion: ocassion });

    const navigate = useNavigate();

    const chooseGuest = (guests) => {
        setGuests(guests);
        setReservation({ ...reservation, guests: guests });
    }

    const chooseDate = (date) => {
        setDate(date);
        setReservation({ ...reservation, date: date });
    }

    const chooseOcassion = (ocassion) => {
        setOccasion(ocassion);
        setReservation({ ...reservation, ocassion: ocassion });
    }

    const chooseTime = (time) => {
        setTime(time);

        setReservation({ ...reservation, time: time });
    }

    const validateReservation = () => {
        if (reservation.time !== '' &&
            reservation.date !== '' &&
            reservation.guests !== '' &&
            reservation.ocassion !== '') {
            // console.log("Reservation: ", reservation);
            return true;

        }

        return false;
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        submitReservation(reservation);
    }

    // Handler Function to submit the reservation data to the server
    const submitReservation = (reservation) => {
        console.log("Reservation From Data: ", reservation);
        alert("Data Submitted Successfully");
        navigate('/ConfirmedBooking');
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Reservations</h1>
            <GuestSelect chooseGuest={chooseGuest} />
            <DateSelect chooseDate={chooseDate} chooseOcassion={chooseOcassion} ocassion={ocassion} />
            <TimeSelect chooseTime={chooseTime} />

            { // Enable, Disable Submit button on form validation
                validateReservation() ? <button disabled={false}>Submit</button> : <button disabled={true}>Submit</button>
            }
        </form>
    );
}

export default Reservations;