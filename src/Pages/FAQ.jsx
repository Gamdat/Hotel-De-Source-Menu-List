import './FAQ.css';

const FAQ = () => {
    return(
        <div className='faq-container'>
            <h2>Frequently Asked Questions</h2>

            <div className='faq-item'>
                <h4>Can i book a room online?</h4>
                <p>Yes! You can book directly through our website by filling out the booking form, or send us a message via Whatsapp for quick assistance.</p>
            </div>
            
            <div className='faq-item'>
                <h4>Can i order food without booking a room?</h4>
                <p>Absolutely, We accept food orders seperately. 
                    Just head to our menu or use the order form.</p>
            </div>
            
            <div className='faq-item'>
                <h4>What payment methods do you accept?</h4>
                <p>We accept cash, transfers, and mobile payment. Online payment coming soon!.</p>
            </div>
            
            <div className='faq-item'>
                <h4>Can i host a small event at your hotel?</h4>
                <p>Yes, you can! We offer space for small event gathering like, bridal shower, private dinner setup, birthday hangout and many more.</p>
            </div>
            
            
            <div className='faq-item'>
                <h4>What are your check-in and check-out times?</h4>
                <p>You can check in anytime! Our team is available to welcome you whenever you arrive, and check-out is by11:30AM.</p>
            </div>
            
            <div className='faq-item'>
                <h4>Can i order a dish that's not on the menu list?</h4>
                <p>Yes, you can! We accept special request, just send us a with what you are craving for, and we'll let you know if it's possible .</p>
            </div>
            
            <div className='faq-item'>
                <h4>Where is Hotel De Source located?</h4>
                <p>We're located at  No. 4, Sooko Street, Parakin, Ile-Ife, Osun State, Nigeria.</p>
            </div>

        </div>
    )
}

export default FAQ;