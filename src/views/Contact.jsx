import React from 'react'
import Header from '@generics/Header'
import Footer from '@generics/Footer'
import Showcase from '@contactspecifics/Showcase'
import ContactForm from '@contactspecifics/ContactForm'
import Map from '@contactspecifics/Map'

function Contact() {
  return (
    <>
      <Header />
      <main>
        <Showcase />
        <ContactForm />
        <Map />
      </main>
      <Footer />
    </>
  )
}

export default Contact