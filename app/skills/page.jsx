import React from 'react';
import Header from '../component/Header.jsx';
import NavBar from './../component/NavBar.jsx';
import Footer from '../component/Footer.jsx';
import SkillsPage from '../component/SkillsPage.jsx';

const Skill = () => {
  return (
      <div className='flex-col relative min-h-screen'>
        <NavBar/>
        <Header title="Strengths and Skills"></Header>
        <SkillsPage/>
        <Footer/>
      </div>
  )
}

export default Skill;
