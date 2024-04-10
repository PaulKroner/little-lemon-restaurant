import React, { useState } from 'react';

const style =  {
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

    const decrement =() => {

        if (guest > 1){
            guest--;
            setGuest(guest);
            setWarning('');

        } else {
            setWarning('* Min 1 guest');
        }

    }

    return (
        <div className=''>

            <h1 className=''>Guest</h1>

            <div className=''>

                    <div className="">
                        <div onClick={decrement}>
                            -
                        </div>

                        <div>
                            {guest}
                        </div>

                        <div onClick={increment}>
                            +
                        </div>                      
                    </div>
                { // Conditional rendering based on guest count
                    guest <= 1 && (<span style={style}>{warning}</span>)
                        ||
                    guest >= 6 && (<span style={style}>{warning}</span>) 
                }

            </div>

        </div>
    );
};

export default GuestSelect;