import React from 'react'
import Button from '@generics/Button'
import Kristine from '@images/kristine.png'
import Mark from '@images/mark.png'
import Kimberly from '@images/kimberly.png'
import Justin from '@images/justin.png'
import MeetUsDivs from '@homespecifics/MeetUsDivs'

const MeetUs = () => {
  return (
    <section className="meet-section">
        <div className="container">
            <div className="part-one">
                <div>
                    <p className="orange-p">Meet Our Team</p>
                    <h2>Experienced Team Members</h2>
                </div>
                <Button color="btn-transparent" text="Browse Teams" url="#" />
            </div>
            <div className="part-two">
                <MeetUsDivs img={Kristine} alt="Woman smiling infront of a window in an office" name="Kristine Palmer" title="Chef Operation Officer" />
                <MeetUsDivs img={Mark} alt="Man in suit holding his hands infront of white bakground" name="Mark Aubri" title="Senior Consultant" />
                <MeetUsDivs img={Kimberly} alt="Woman sitting in a window smiling, and holding a book" name="Kimberly Hansen" title="Senior Consultant" />
                <MeetUsDivs img={Justin} alt="Headshot of a man that is smiling" name="Justin Willoman" title="Senior Tech Consultant" />
            </div>
            <div className="round-buttons">
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a className="active" href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
            </div>
        </div>
    </section>
  )
}

export default MeetUs