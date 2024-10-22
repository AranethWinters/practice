import React from 'react'
import styles from '@/app/style/homepage.module.css'
import Experience from './Experience'

const SkillsPage = () => {
  return (
    <div className={`${styles.contentWrap}`}>
      <div className={`${styles.flexContainer}`}>
        <Experience/>
      </div>
    </div>
  )
}

export default SkillsPage
