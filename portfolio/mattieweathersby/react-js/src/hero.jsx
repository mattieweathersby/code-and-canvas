import React from 'react'

const Hero = () => {
    return  (
        <section className="hero">
        
            
            {/* Main content */}
            <div className="hero-content">
                {/* Year capsule */}
                <div className="year-capsule">2025</div>
                
                {/* Vertical text */}
                <div className="vertical-text">GRAPHIC DESIGN</div>
                
                {/* Scroll indicator */}
                <div className="scroll-indicator">SCROLL DOWN</div>
                
                {/* Main title */}
                <div className="main-title">
                    <h1>PORT</h1>
                    <h1 className="folio">FOLIO</h1>
                </div>
                
                {/* Byline */}
                <div className="byline">
                    <span className="by-text">by</span>
                    <span className="name-text">MATTIE WEATHERSBY</span>
                </div>
            </div>
    
        </section>
    )
}

export default Hero