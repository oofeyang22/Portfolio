'use client'

import Image from 'next/image'

interface Skill {
  name: string
  icon: string
  alt: string
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'Figma', icon: '/assets/figma (1).png', alt: 'Figma' },
    { name: 'HTML', icon: '/assets/html.png', alt: 'HTML' },
    { name: 'CSS', icon: '/assets/css-3.png', alt: 'CSS' },
    { name: 'JavaScript', icon: '/assets/js.png', alt: 'JavaScript' },
    { name: 'React', icon: '/assets/physics.png', alt: 'React' },
    { name: 'Tailwind', icon: '/assets/download (1).png', alt: 'Tailwind' },
    { name: 'TypeScript', icon: '/assets/typescript.png', alt: 'TypeScript' }
  ]

  return (
    <section 
      id="skills" 
      className="section" 
      data-aos="fade-left" 
      data-aos-once="true"
    >
      <div className="container">
        <div className="section-title">
          <h2>My <span>Skills</span></h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-item" data-aos="zoom-in" data-aos-delay={index * 100}>
              <Image
                src={skill.icon}
                alt={skill.alt}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills