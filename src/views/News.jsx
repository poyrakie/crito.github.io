import React from 'react'
import Header from '@generics/Header'
import Footer from '@generics/Footer'
import Showcase from '@newsspecifics/Showcase'
import MailSignup from '@generics/MailSignup'
import Articles from '@newsspecifics/Articles'

const News = () => {
  return (
    <>
        <Header />
        <main>
            <Showcase />
            <Articles />
            <MailSignup />
        </main>
        <Footer />
    </>
  )
}

export default News