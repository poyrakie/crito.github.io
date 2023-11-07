import React from 'react'
import Header from '@generics/Header'
import ShowcaseHome from '@homespecifics/ShowcaseHome'
import Footer from '@generics/Footer'
import Features from '@homespecifics/Features'
import About from '@homespecifics/About'
import Services from '@homespecifics/Services'
import ChooseUs from '@homespecifics/ChooseUs'
import Projects from '@homespecifics/Projects'
import MeetUs from '@homespecifics/MeetUs'
import Testimonial from '@homespecifics/Testimonial'
import Articles from '@homespecifics/Articles'
import MailSignup from '@generics/MailSignup'

const Home = () => {
  return (
    <>
        <Header />
        <main>
            <ShowcaseHome />
            <Features />
            <About />
            <Services />
            <ChooseUs />
            <Projects />
            <MeetUs />
            <Testimonial />
            <Articles />
            <MailSignup />
        </main>
        <Footer />
    </>
  )
}

export default Home