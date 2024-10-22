import React from 'react'
import styles from '@/app/style/homepage.module.css'
import Experience from './Experience'
import Strengths from './Strengths'

const SkillsPage = () => {
  return (
    <div className={`${styles.contentWrap}`}>
      <div className={`${styles.flexContainer}`}>
        <Experience/>
        <Strengths/>
      </div>
    </div>
  )
}

export default SkillsPage
