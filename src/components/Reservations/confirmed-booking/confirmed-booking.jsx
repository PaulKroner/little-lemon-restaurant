import bookingConfirmed from '../../../assets/bookingConfirmed.png';
import "./confirmed-booking.css";

const ConfirmedBooking = () => {
    return (
        <div className="confirmed-booking-layout d-flex justify-content-center align-items-center p-3">
            <div className="confirmed-booking-sign d-flex flex-column justify-content-center align-items-center">
                <img src={bookingConfirmed} alt="" />
                <h1 className="confirmed">Your Booking is confirmed</h1>
            </div>
        </div>
    );
}

export default ConfirmedBooking;