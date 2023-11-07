import React from 'react'
import MessageForm from '@scripts/MessageForm'
import ContactFormDivs from './ContactFormDivs'


const ContactForm = () => {
  return (
    <section className="contact-form">
        <div className="info container">
            <div className="columns">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                    <h3>Visit us</h3>
                    <a href="https://www.google.com/maps/place/Sveav%C3%A4gen+31,+111+34+Stockholm/data=!4m2!3m1!1s0x465f9d6799554e87:0x6562d2c842903003?sa=X&ved=2ahUKEwiq99-55pqBAxU3S_EDHRp2DvsQ8gF6BAgPEAA&ved=2ahUKEwiq99-55pqBAxU3S_EDHRp2DvsQ8gF6BAgUEAI" target="_blank">
                        <p>Sveavägen 31</p>
                        <p>111 34 STOCKHOLM</p>
                    </a>
                </div>
            </div>
            <ContactFormDivs icon="fa-solid fa-phone" titel="Call us" link1="tel:+46812147050" link2="tel:+46812147051" text1="+46 (8) 121 470 50" text2="+46 (8) 121 470 51" />
            <ContactFormDivs icon="fa-solid fa-envelope" titel="Email us" link1="mailto:info@crito.com" link2="mailto:support@crito.com" text1="info@crito.com" text2="support@crito.com" />
        </div>
        <div className="form-part container">
            <h2>
                Leave us a message <br></br>for any information.
            </h2>
            <MessageForm />
            {/* <RegisterEvent /> */}
            {/* <form onSubmit={RegisterEvent(event)} noValidate>
                <label htmlFor="name">Name</label><br></br>
                <input 
                    required
                    id="formName" 
                    type="text" 
                    name="name" 
                    placeholder="Name*" /><br></br>
                
                <span className='errorSpan' id='formNameError'></span>
                
                <label htmlFor="email">Email</label><br></br>
                <input 
                    required
                    id="formEmail" 
                    type="email" 
                    name="email" 
                    placeholder="Email*" /><br></br>
                
                <span className='errorSpan' id='formEmailError'></span>
                
                <label htmlFor='message'>Your Message</label><br></br>
                <textarea className='success'
                    required
                    id="formMessage" 
                    type="text" 
                    name='message'
                    placeholder="Your Message*"></textarea>
                
                <span id="characterCounter"></span>
                <span className='errorSpan' id='formMessageError'>asdasd</span>
                
                <button type='submit' className="btn-yellow" href="#">Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
            </form>   */}
        </div>
    </section>
  )
}

export default ContactForm