import React from 'react'
import Squigglylines from '@images/mail-signup-lines.svg'

const MailSignup = () => {
  return (
    <section className="mail-signup-section">
        <img className="squiggly-lines" src={Squigglylines} alt="squiggly-lines" />
        <div className="container">
            <h2>
                Get News Updates By Signup
            </h2>

            <div className="subscribe">
                <form method="post">
                    <label htmlFor="signup"></label>
                    <input type="text" id="signup" name="signup" placeholder="username@domain.com" />
                </form>
                <button className="btn-yellow" href="#">Subscribe <i className="fa-regular fa-arrow-up-right"></i></button>
            </div>
        </div>
    </section>
  )
}

export default MailSignup