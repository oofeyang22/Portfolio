'use client'

const About = () => {
  return (
    <section 
      id="about" 
      className="section gradient-bg" 
      data-aos="flip-up" 
      data-aos-duration="2000" 
      data-aos-once="true"
    >
      <div className="container">
        <div className="section-title">
          <h2>About <span>Me</span></h2>
        </div>
        <div className="text-center">
          <p>
            I am Feranmi Emmanuel, a man of many talents from Nigeria. I am a proficient web developer 
            and a solid UI/UX designer. I am available for freelance gigs and full-time roles. I am proficient in ReactJS, Tailwind CSS, NextJS, and Typescript. I also have solid knowledge of NodeJS, ExpressJS, and MongoDB.
            I have built projects, which I have published on{' '}
            <a 
              href="https://github.com/oofeyang22" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#fff', textDecoration: 'none' }}
            >
              Github
            </a>
             . I am also a capable UI/UX designer, who can 
            recognize user pain points and develop innovative solutions to improve their overall 
            user experience. I am skilled with industry-standard design tools like Figma, which 
            I use to bring my ideas to life.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About