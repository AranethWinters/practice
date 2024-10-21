import React from 'react';
import homepage from '@/app/style/homepage.module.css';
import StrengthsAndSkills from '../component/StrengthsAndSkills.jsx'
import SkillsHeader from '../component/SkillsHeader.jsx'
import Header from '../component/Header.jsx';
import localFont from 'next/font/local';
import NavBar from './../component/NavBar.jsx';
import Experience from '../component/Experience.jsx';
import Footer from '../component/Footer.jsx';

const Skill = () => {
  return (
    <div className='flex-col'>
      <NavBar/>
      <Header title="Strengths and Skills"></Header>
      <Experience/>
      <Footer/>
    </div>
  )
}

export default Skill;
