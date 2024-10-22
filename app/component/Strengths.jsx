"use client"
import React from 'react'
import './../style/experience.css'
import localFont from 'next/font/local'

const myFont = localFont({ src: '../fonts/MiguelDeNorthern.ttf' })

const Strengths = () => {
  return (
    <div className='flex-col'>
        <div className='section_title'>
            <h1 className={`text-center ${myFont.className}`}>Strengths</h1>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Strengths
