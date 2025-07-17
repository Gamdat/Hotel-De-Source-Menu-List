import React from 'react';
import './BookingForm.css';

const BookingForm = () => {
    return(
        <div className='booking-container'>
            <h2>Book A Room Or Place Your Order</h2>
            <form
            action="https://formsubmit.co/hoteldesourceoyinade@gmail.com"
            method='POST'
            className='booking-form'>
                <input type='text'
                name='name'
                placeholder='Your Full Name'
                required/>

                    <input type='text'
                name='email'
                placeholder='Your Email'
                required/>

                <input type='date'
                name='booking_date'
                required/>

                <textarea name="message"
                placeholder='Special requests or order details..' id=""
                rows="4"></textarea>
            
            <select name='type' required>
                <option value="">Select type</option>
                <option value="room">Room Booking</option>
                <option value="order">Place Your Order (e.g food, drinks)</option>
            </select>
            <input type='hidden'
            name='_captcha'
            value="false"/>
            <input type='hidden' name='_next'
            value="https://hoteldesource(oyinade)/thank-you"/>

            <button type='submit'>Submit Booking</button>
            </form>
        </div>
    )
}

export default BookingForm;