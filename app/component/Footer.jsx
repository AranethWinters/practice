"use client";
import React from 'react';
import styles from '@/app/style/footer.module.css'
import localFont from 'next/font/local';

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
            <p className='underline'>©2024</p>
        </div>
  )
}

export default Footer
