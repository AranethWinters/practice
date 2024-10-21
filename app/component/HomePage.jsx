import React from 'react';
import homepage from '@/app/style/homepage.module.css';
import AboutMe from '../component/AboutMe.jsx'

const HomePage = (params) => {
    return (
        <div className={`${homepage.contentWrap}`}>
            <div className={`${homepage.flexContainer}`}>
                <AboutMe/>
            </div>
        </div>
);
}

export default HomePage
