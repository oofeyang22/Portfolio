'use client'

import Image from 'next/image'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero" 
      data-aos="fade-down" 
      data-aos-duration="1000" 
      data-aos-once="true"
    >
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I am Feranmi Emmanuel, <span className="highlight">A Front-end developer.</span>
            </h1>
            <p>
              I am a front-end developer and technical writer, who loves to design and develop 
              user-centric websites and web apps, that will provide users with a delightful experience. 
              I work with figma, HTML, CSS, JavaScript, ReactJS, TailwindCSS.
            </p>
          </div>
          <div className="hero-image">
            <div className="profile-circle">
              <Image
                src="/assets/port.png"
                alt="Feranmi Emmanuel"
                width={280}
                height={280}
                priority
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero