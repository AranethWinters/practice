"use client"
import React from 'react'
import styles from '@/app/style/homepage.module.css'
import Contacts from './Contacts'

const ContactPage = () => {
  return (
    <div className={`${styles.contentWrap}`}>
      <div className={`${styles.flexContainer}`}>
        <Contacts/>
      </div>
    </div>
  )
}

export default ContactPage
