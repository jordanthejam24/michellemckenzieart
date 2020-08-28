import React from 'react';
import '../css/Contact.scss';

function Contact() {
    return (
        <div className="contact">
            <div className="contact__inquire">
                <h1 className="heading__tertiary">How do I get a custom painting?</h1>
                <h3 className="heading__secondary-small mgn-vert-med">Email and send me the photo you would like to become a memorable painting. Also let me know if you have anything you'd like to add. I'll blow it up to size and create it for you.</h3>
            </div>
            <div className="contact__form">
                <form action="get" className="form">
                    <h1 className="heading__primary">Start Booking Now</h1>
                    <div className="form__group">
                        <input type="name" name="name" id="name"/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form__group">
                        <input type="email" name="email" id="email"/>
                        <label htmlFor="email">Email Address</label>
                    </div>
                    <div className="form__group">
                        <input type="text" name="message" id="message"/>
                        <label htmlFor="message">Your Message</label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
