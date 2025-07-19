import React from "react";
import { Link } from "react-router-dom";
import './Services.css';

const Services = () => {
    return(
        <section className="services-section">
            <h2>Our Services</h2>
            <div className="service-card">
                <h3>Kitchen</h3>
                <p>Place your food orders directly from our kitchen, fresh, delicious, and fast.</p>
            </div>
            <div className="service-card">
                <h3>Bar</h3>
                <p>Enjoy a wide range of drinks and shisha in a relaxing atmosphere.</p>
            </div>
            <div className="service-card">
                <h3>Room</h3>
                <p>Book comfortable rooms for lodging or short rest. Clean and cozy, always ready.</p>
            </div>
            <div className="service-card">
                <h3>Massage Services</h3>
                <p>We assist in booking for your massage session and relaxation needs.</p>
            </div>
            
             <Link to="/booking">
                 <button className="booking-btn">Place Your Order or Book A Room</button></Link>
            
        </section>
    )
}

export default Services;