import './Contact.css';


function Contact() {
  return(
       <div className="container">
        <h2 className='contact'>Contact Us</h2>
        <p> We'd love to hear from you! Send us a message or reach us directly.</p>
        <form className="contact-form">
            <input type="text" placeholder="Your Name" required/>
            <input type="email" placeholder="Email Address" required/>
            <textarea placeholder="Your Message" rows="5" required/>
            <button type="submit">Send Message</button>
        </form>

        <div className="contact-links">
            <p> <a href="tel:+2348068880848 +2348141938149">Phone Number: +2348141938149, +2348068880848</a></p>
            <p> <a href="https://wa.me/2348068880848" target="_blank" rel="noreferrer">Chat Us On WhatsApp</a></p>
            <p> <a href="mailto:hoteldesourceoyinade@gmail.com">Hello@hoteldesourceoyinade@gmail.com</a></p>
            <p> <a href='https://www.instagram.com/hoteldesource?igsh=MTZldGVxamU0aWVtZA=='
            target='blank'
            rel='noopener noreferrer'
            className='instagram-btn'>Follow Us on Instagram</a></p>
        </div>
       </div>
    )
}

export default Contact;