import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
    return(
         <section className="about">
            <h1 className="about-title">
                Get to know About Hotel De Source (Oyinade)
            </h1>
            <div className="about-grid">
                 <div className='about-card'>
                <h3>About Us</h3>
               <p className='more'>
                    Hotel De Source (Oyinade) is a serene and relaxing destination in Ile-Ife offering fine dining, refreshing
                    drinks, and comfortable rooms for both short and long stays. Whether you are here to unwind in our lounge
                    or enjoy a peaceful stay, you're always welcome.
                </p>
               </div>
               <div className='about-card'>
                <h3>What We Offer</h3>
                <ul className='offer-list'>
                    <li>A well-stocked lounge with drinks & foods.</li>
                    <li>Clean, affordable rooms for short and long stays.</li>
                    <li>A vibrant and relaxing hangout space.</li>
                    <li>Premium liquor</li>
                    <li>Weekly & Weekend entertainment.</li>
                    <li>24/7 top-notch hospitality with a luxurious touch.</li>
                    </ul>
               </div>
               <div className='about-card'>
                <h3>Our Focus</h3>
                <p>We serve guests seeking:</p>
                <ul className=' focus-list'>
                    <li> A refreshing spot to eat, drink or relax.</li>
                    <li>Comfortable lodging for a short rests or overnight stays.</li>
                    <li>A neat, cozy space to unwind without breaking the bank.</li>
                    <li> A friendly bar for great coversations.</li>
                    <li>A lively nightclub experience to elevate your night.</li>
                </ul>
               </div>
               <div className='about-card'>
                <h3>Our Promise</h3>
                <p className='more'> At Hotel De Source, every guest is welcomed with warmth, privacy, and personalized care. Whether you are staying a few hours
            or a few nights, your comfort is our priority.
          </p>
               </div>
               <div className='about-card'>
                <h3>Where to Find Us</h3>
                <p> No. 4, Sooko Street, Parakin, Ile-Ife, Osun State, Nigeria.</p>

                <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.204842879996!2d4.535409474995026!3d7.4884275113360955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104787c2be6e4037%3A0x5f2c5e8e0a5e8e1e!2sParakin%2C%20Ife!5e0!3m2!1sen!2sng!4v1720800000000!5m2!1sen!2sng"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
               </div>
               
         </div>

          <p className='thank-you'><strong>Thank you for choosing Hotel De Source (Oyinade), we can't wait to host you.</strong></p>
        <Link to="/booking">
                 <button className="booking-btn">Book A Room or Place Your Order</button></Link>
      
        </section>
    )
}

export default AboutUs;