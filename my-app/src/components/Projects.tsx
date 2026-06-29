'use client'

import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  image: string
  projectUrl: string
}

const Projects = () => {
  const projects: Project[] = [

    {
      id: 0,
      title: 'Joy Hospital',
      description: 'A website for an hospital named Joy Hospital built using Vite. There are 10 webpages with detailed info about the services and facilities of the hospital.',
      image: '/assets/joy.png',
      projectUrl: 'https://joy-hospital-rgwd.vercel.app/'
    },

      {
      id: 1,
      title: 'Yangyshop',
      description: 'An e-commerce website built using NextJS. There is user authentication, proper data fetching, and stripe integration for payment.',
      image: '/assets/yangyshop.png',
      projectUrl: 'https://yangymin.vercel.app/'
    },
      {
      id: 2,
      title: 'Easyshop',
      description: 'This is an e-commerce website built using Vite for the interface. The backend was built using MongoDB, Express.js, and NodeJS.',
      image: '/assets/shop.png',
      projectUrl: 'https://luxurystore-7d5q.vercel.app/'
    },
    {
      id: 3,
      title: 'Yangymin',
      description: 'This is a dashboard built entirely using Shadcn components. It contains area charts, line charts, bar charts, and pie charts, which show different info.',
      image: '/assets/shadcn.png',
      projectUrl: 'https://github.com/oofeyang22/Yangymin'
    },
    {
      id: 4,
      title: 'Textify',
      description: 'This is a fullstack website using NextJS, Auth.js, and MongoDB. There is user authentication, blog functionality, and an admin panel.',
      image: '/assets/textify.png',
      projectUrl: 'https://textify-puce.vercel.app/'
    },
    {
      id: 5,
      title: 'Sella',
      description: 'This is an admin dashboard for an e-commerce business using NextJS. Not buit for mobile. For login, Username-Harry, password-1234',
      image: '/assets/sella.png',
      projectUrl: 'https://sella-self.vercel.app/'
    },
    {
      id: 6,
      title: 'Worldwunda',
      description: 'This is a coding project, whereby I created a visually appealing tourist website, which shows some of the best tourist sites across the world. It was built using ReactJS and Hygraph CMS.',
      image: '/assets/worldwunda.jpg',
      projectUrl: 'https://world-wunda.vercel.app/'
    },
    {
      id: 5,
      title: 'Furniture Landing Page',
      description: 'This is a project, which I built using ReactJS and Tailwind CSS. It is based on a fictitious company that specializes in selling luxurious furniture.',
      image: '/assets/yangy.jpg',
      projectUrl: 'https://furniture-website-lemon.vercel.app/'
    },
    {
      id: 6,
      title: 'Edtech Landing Page',
      description: 'This is a project, which I built using ReactJS and TailwindCSS. It is built for a fictitious startup named Tekamp, that provides courses for those interested in tech.',
      image: '/assets/tekamp.jpg',
      projectUrl: 'https://edtech-landing-page-khaki.vercel.app/'
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
            <a 
            key={project.id} 
            href={project.projectUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="card project-card block" 
            data-aos="fade-up" 
           data-aos-delay={index * 100}
        >
            <div >
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
                
              </div>
              
            </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects