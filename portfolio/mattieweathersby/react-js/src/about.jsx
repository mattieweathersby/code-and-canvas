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
                    <p>(302)-208-0327</p>
                    <p>https://github.com/mattieweathersby</p>
                    <p>https://www.linkedin.com/in/mattieweathersby/</p>
                </div>
            </div>
        </section>
    )
}

export default About