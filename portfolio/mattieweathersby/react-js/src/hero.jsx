import React from 'react'

const Hero = () => {
    return  (
        <section className="hero">
            {/* Top horizontal line */}
            <div className="horizontal-line top-line"></div>
            
            {/* Left triangle */}
            <div className="triangle-left"></div>
            
            {/* Main content */}
            <div className="hero-content">
                {/* Year capsule */}
                <div className="year-capsule">2025</div>
                
                {/* Vertical text */}
                <div className="vertical-text">GRAPHIC DESIGN</div>
                
                {/* Main title */}
                <div className="main-title">
                    <h1>PORT</h1>
                    <h1>FOLIO</h1>
                </div>
                
                {/* Byline */}
                <div className="byline">
                    <span className="by-text">by</span>
                    <span className="name-text">MATTIE WEATHERSBY</span>
                </div>
            </div>
            
            {/* Right triangle */}
            <div className="triangle-right"></div>
            
            {/* Bottom horizontal line */}
            <div className="horizontal-line bottom-line"></div>
        </section>
    )
}

export default Hero