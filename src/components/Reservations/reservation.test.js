import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Reservations from './reservations'

describe('Reservations Component', () => {
  it('submits reservation when all fields are filled', () => {
    // Render the component
    render(<Reservations />);

    // Fill in the guest select field
    fireEvent.change(screen.getByLabelText('Guests'), { target: { value: '2' } });

    // Fill in the date select field
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2024-04-15' } });

    // Fill in the occasion select field
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'anniversary' } });

    // Fill in the time select field
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '12:00' } });

    // Check that the submit button is enabled
    expect(screen.getByText('Submit')).toBeEnabled();

    // Submit the form
    fireEvent.click(screen.getByText('Submit'));

    // Check that the reservation is submitted
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    expect(window.navigate).toHaveBeenCalledWith('/ConfirmedBooking');
  });

  it('does not submit reservation when fields are missing', () => {
    // Render the component
    render(<Reservations />);

    // Check that the submit button is disabled
    expect(screen.getByText('Submit')).toBeDisabled();

    // Submit the form
    fireEvent.click(screen.getByText('Submit'));

    // Check that the reservation is not submitted
    expect(window.scrollTo).not.toHaveBeenCalled();
    expect(window.navigate).not.toHaveBeenCalled();
  });
});
