"use client";
import React from 'react';
import homepage from '@/app/style/homepage.module.css'
import localFont from 'next/font/local';
import NavBar from './NavBar.jsx';

const myFont = localFont({src:'../fonts/MiguelDeNorthern.ttf'})

const Header = () => {
  return (
    <header>
            <div className={`${homepage.header}`}>
                <h1 className={`${myFont.className} ${homepage.title}`}>Strengths and Skills</h1>
            </div>
    </header>
  )
}

export default Header
