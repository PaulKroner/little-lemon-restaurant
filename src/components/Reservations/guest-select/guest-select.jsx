import React, { useState } from 'react';
import "./guest-select.css";

const style = {
    fontSize: '16px',
    color: 'red',
}

const GuestSelect = ({ chooseGuest }) => {
    let [guest, setGuest] = useState(1);
    const [warning, setWarning] = useState('');

    const increment = () => {

        if (guest < 10) {
            guest++;
            setGuest(guest);
            setWarning('');

            chooseGuest(guest);
        } else {
            setWarning(`* Max 10 guests`);
        }

    }

    const decrement = () => {

        if (guest > 1) {
            guest--;
            setGuest(guest);
            setWarning('');

        } else {
            setWarning('* Min 1 guest');
        }

    }

    return (
        <div>
            <div className='guest-layout d-flex flex-row justify-content-between'>

                <h1 className='guest-heading d-flex justify-content-center align-items-center'>Guest</h1>

                <div className='guest-counter-layout d-flex align-items-center'>

                    <div className="guest-counter d-flex justify-content-left align-items-center">
                        <div onClick={decrement} className="counter-sign">
                            -
                        </div>

                        <div className="">
                            {guest}
                        </div>

                        <div onClick={increment} className="counter-sign counter-sign-minus d-flex justify-content-center align-items-center">
                            +
                        </div>
                    </div>

                </div>

            </div>
            { // Conditional rendering based on guest count
                guest <= 1 && (<span style={style}>{warning}</span>)
                ||
                guest >= 6 && (<span style={style}>{warning}</span>)
            }
        </div>

    );
};

export default GuestSelect;