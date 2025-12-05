import React from 'react'
import meImage from './assets/me.png'

const About = () => {
    return  (
        <section className="about">
            <div className="about-content">
                <img src={meImage} alt="Picture of Mattie Weathersby" className="about-image" />
                <h2 className="contact-title">Contact</h2>
                <div className="contact-content">
                    <p>mweathersby252@gmail.com</p>
                    <p>https://github.com/mattieweathersby</p>
                    <p>https://www.linkedin.com/in/mattieweathersby/</p>
                </div>
            </div>
            <div className="aboutme-content">
                <h2 className="aboutme-title">About Me</h2>
                <div className="aboutme-description">
                    <p>
                    Creative and detail-oriented professional transitioning 
                    into software engineering and UX/UI design, with experience
                     in brand strategy, user research, and digital design. 
                     Skilled at turning customer insights into intuitive,
                      visually engaging solutions that enhance usability 
                      and drive results. Known for combining empathy with
                       technical thinking to deliver impactful user experiences.
                    </p>
                </div>
                <h2 className="expereince-title">Experience</h2>
            </div>
        </section>
    )
}

export default About