import React from 'react';
import Header from '../component/Header.jsx';
import NavBar from './../component/NavBar.jsx';
import Experience from '../component/Experience.jsx';
import Footer from '../component/Footer.jsx';

const Skill = () => {
  return (
    <div className='flex-col relative min-h-screen'>
      <NavBar/>
      <Header title="Strengths and Skills"></Header>
      <Experience/>
      <Footer/>
    </div>
  )
}

export default Skill;
