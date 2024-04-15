import bookingConfirmed from '../../../assets/bookingConfirmed.png';
import "./confirmed-booking.css";

const ConfirmedBooking = () => {
    return (
        <div className="confirmed-booking-layout">
            <div className="confirmed-booking-sign">
                <img src={bookingConfirmed} alt="" />
                <h1 className="confirmed">Your Booking is confirmed</h1>
            </div>
        </div>
    );
}

export default ConfirmedBooking;