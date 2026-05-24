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
      title: 'Easyshop',
      description: 'This is an e-commerce website built using Vite for the interface. The backend was built using MongoDB, Express.js, and Node,JS',
      image: '/assets/shop.png',
      githubUrl: 'https://github.com/oofeyang22/luxurystore'
    },
    {
      id: 1,
      title: 'Yangymin',
      description: 'This is a dashboard built entirely using Shadcn components. It contains area charts, line charts, bar charts, and pie charts, which show different info.',
      image: '/assets/shadcn.png',
      githubUrl: 'https://github.com/oofeyang22/Yangymin'
    },
    {
      id: 2,
      title: 'Textify',
      description: 'This is a fullstack website using NextJS, Auth.js, and MongoDB. There is user authentication, blog functionality, and an admin panel.',
      image: '/assets/textify.png',
      githubUrl: 'https://github.com/oofeyang22/Textify'
    },
    {
      id: 3,
      title: 'Sella',
      description: 'This is an admin dashboard for an e-commerce business using NextJS. For login, Username-Harry, password-1234',
      image: '/assets/sella.png',
      githubUrl: 'https://github.com/oofeyang22/Sella'
    },
    {
      id: 4,
      title: 'Worldwunda',
      description: 'This is a coding project, whereby I created a visually appealing tourist website, which shows some of the best tourist sites across the world. It was built using ReactJS and Hygraph CMS.',
      image: '/assets/worldwunda.jpg',
      githubUrl: 'https://github.com/oofeyang22/WorldWunda'
    },
    {
      id: 5,
      title: 'Furniture Landing Page',
      description: 'This is a project, which I built using ReactJS and Tailwind CSS. It is based on a fictitious company that specializes in selling luxurious furniture.',
      image: '/assets/yangy.jpg',
      githubUrl: 'https://github.com/oofeyang22/Furniture-Website'
    },
    {
      id: 6,
      title: 'Edtech Landing Page',
      description: 'This is a project, which I built using ReactJS and TailwindCSS. It is built for a fictitious startup named Tekamp, that provides courses for those interested in tech.',
      image: '/assets/tekamp.jpg',
      githubUrl: 'https://github.com/oofeyang22/Edtech-Landing-Page'
    },
    {
      id: 7,
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