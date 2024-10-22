import React from 'react'
import Header from './../component/Header.jsx'
import NavBar from '../component/NavBar.jsx'
import Footer from '../component/Footer.jsx'
import ContactPage from '../component/ContactPage.jsx'

const Contact = () => {
  return (
    <div className='flex-col relative min-h-screen'>
        <NavBar/>
        <Header title="Contact Me"/>
        <ContactPage/>
        <Footer/>
    </div>
  )
}

export default Contact
