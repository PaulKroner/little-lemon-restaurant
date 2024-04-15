import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DateSelect from "./date-select/date-select";
import GuestSelect from "./guest-select/guest-select";
import TimeSelect from "./time-select/time-select";
import "./reservations.css";

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
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/ConfirmedBooking');
    }

    return (
        <div className="reservation-layout">
            <form onSubmit={onSubmitHandler} className="reservation-form">
                <h1 className="reservation-heading">
                    Reservations
                </h1>
                <GuestSelect chooseGuest={chooseGuest} />
                <DateSelect chooseDate={chooseDate} chooseOcassion={chooseOcassion} ocassion={ocassion} />
                <TimeSelect chooseTime={chooseTime} />

                { // Enable, Disable Submit button on form validation
                    validateReservation() ? <button className="submit-Button" disabled={false}>Submit</button> : <button className="submit-Button" disabled={true}>Submit</button>
                }
            </form>
        </div>

    );
}

export default Reservations;