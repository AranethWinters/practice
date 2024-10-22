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
        <div className="flex-col gap-4 pb-10 justify-center text-center">
            <ul className='bg-red inline-block'>
                <li>
                    <div className='border-white border-2 rounded-2xl max-w-2xl p-5 m-4'>
                        <p className='text-center'>Good team communication skills</p>
                    </div>
                </li>
                <li>
                    <div className='border-white border-2 rounded-2xl max-w-2xl p-5 m-4'>
                        <p className='text-center'>Trustworthy with projects</p>
                    </div>
                </li>
                <li>
                    <div className='border-white border-2 rounded-2xl max-w-2xl p-5 m-4'>
                        <p className='text-center'>Adaptable and teachable</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Strengths
