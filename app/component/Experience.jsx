import React from 'react'
import './../style/experience.css'
import localFont from 'next/font/local'

const myFont = localFont({ src: '../fonts/MiguelDeNorthern.ttf' })

const Experience = () => {
    const nextjsPercent = '50%'
    const d3Percent = '10%'
    const csharpPercent = '70%'
    const godotPercent = '60%'
  return (
    <div>
        <div className='experience-section' id='about'>
        <div className="container">
            <div className="section_title center">
                <h2 className={`text-center ${myFont.className}`}>My Languages and Frameworks</h2>
            </div>
            <div className="experience-items">
                <div className="experience-item">
                    <div className="experience-info">
                        <p>Next.js</p>
                        <p>{nextjsPercent}</p>
                    </div>
                    <div className="progress-line" data-percent={nextjsPercent}>
                        <span style={{width:`${nextjsPercent}`}}></span>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-info">
                        <p>D3</p>
                        <p>{d3Percent}</p>
                    </div>
                    <div className="progress-line" data-percent={d3Percent}>
                        <span style={{width:`${d3Percent}`}}></span>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-info">
                        <p>C#</p>
                        <p>{csharpPercent}</p>
                    </div>
                    <div className="progress-line" data-percent={csharpPercent}>
                        <span style={{width:`${csharpPercent}`}}></span>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-info">
                        <p>Godot</p>
                        <p>{godotPercent}</p>
                    </div>
                    <div className="progress-line" data-percent={godotPercent}>
                        <span style={{width:`${godotPercent}`}}></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Experience
