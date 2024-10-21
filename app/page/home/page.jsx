import React from 'react';
import homepage from '@/app/style/homepage.module.css';
import AboutMe from '../../component/AboutMe.jsx'
import localFont from 'next/font/local';

const myFont = localFont({src:'../../fonts/Miguel De Northern.ttf'})

export const HomePage = (params) => {
    return (
        <div className={`${homepage.contentWrap}`}>
            <div className={`${homepage.flexContainer}`}>
                <AboutMe/>
            </div>
        </div>
);
}
