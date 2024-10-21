import style from '@/app/style/about.module.css'
import localFont from 'next/font/local';
import Profile from './ProfileImage.jsx';

const myFont = localFont({ src: '../fonts/MigueldeNorthern.ttf' })


import React from 'react'

const AboutMe = () => {
  return (
    <div>
      <div className={`${style.flexContainer1}`}>
            <Profile/>
            <div className={`${style.flexContainer2}`}>
            <h1 className={`${myFont.className} ${style.title}`}>About Me</h1>
            <p>My name is Ernest Blane P. Calara, a programmer, software developer, and aspiring game designer. I like to read in my sparetime, mostly fantasy and scifi books. I play videogames, my favorite genre being roleplaying games. I enjoy tabletop games like Magic: The Gathering and Dungeons and Dragons. When playing D&D, I mostly take on the role of Dungeon Master because I love the emergent storytelling aspect of the game.</p>
        </div>
        </div>
    </div>
  )
}

export default AboutMe
