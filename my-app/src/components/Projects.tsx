'use client'

import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  image: string
  githubUrl: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 0,
      title: 'Worldwunda',
      description: 'This is a coding project, whereby I created a visually appealing tourist website, which shows some of the best tourist sites across the world. It was built using ReactJS and Hygraph CMS.',
      image: '/assets/worldwunda.jpg',
      githubUrl: 'https://github.com/oofeyang22/WorldWunda'
    },
    {
      id: 1,
      title: 'Furniture Landing Page',
      description: 'This is a project, which I built using ReactJS and Tailwind CSS. It is based on a fictitious company that specializes in selling luxurious furniture.',
      image: '/assets/yangy.jpg',
      githubUrl: 'https://github.com/oofeyang22/Furniture-Website'
    },
    {
      id: 2,
      title: 'Edtech Landing Page',
      description: 'This is a project, which I built using ReactJS and TailwindCSS. It is built for a fictitious startup named Tekamp, that provides courses for those interested in tech.',
      image: '/assets/tekamp.jpg',
      githubUrl: 'https://github.com/oofeyang22/Edtech-Landing-Page'
    },
    {
      id: 3,
      title: 'Business Dashboard',
      description: 'This is an analytical dashboard I built using ReactJS and a couple of third-party libraries. The dashboard is built for a fictitious fintech company named Moneycrypt.',
      image: '/assets/moneycrypt.jpg',
      githubUrl: 'https://github.com/oofeyang22/Business-Dashboard'
    },
    {
      id: 4,
      title: 'Home Master',
      description: 'This is a landing page, which I built for a cleaning services company. I used Next.js framework and TypeScript for the project.',
      image: '/assets/homemaster.png',
      githubUrl: 'https://github.com/oofeyang22/Home-Master'
    }
  ]

  return (
    <section 
      id="projects" 
      className="section gradient-bg" 
      data-aos="fade-right" 
      data-aos-duration="3000" 
      data-aos-once="true"
    >
      <div className="container">
        <div className="section-title">
          <h2>My <span>Projects</span></h2>
        </div>
        <div className="grid grid-3">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="card project-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="card-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  View GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects