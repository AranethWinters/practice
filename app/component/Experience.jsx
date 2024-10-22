import React from 'react'
import './../style/experience.css'

const Experience = () => {
    const nextjsPercent = '50%'
    const d3Percent = '10%'
    const csharpPercent = '50%'
    const godotPercent = '60%'
  return (
    <div>
        <div className='experience-section' id='about'>
        <div className="container">
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
