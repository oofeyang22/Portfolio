'use client'

import Image from 'next/image'

interface Blog {
  id: number
  title: string
  description: string
  image: string
  blogUrl: string
}

const Blogs = () => {
  const blogs: Blog[] = [
    {
      id: 0,
      title: 'How to Create a React Custom Hook',
      description: 'This is an article that I published on Hashnode. It explores the concept of custom hooks in React and the skillset required to create a custom hook.',
      image: '/assets/custom.jpg',
      blogUrl: 'https://olaitanferanmi.hashnode.dev/how-to-create-a-react-custom-hook'
    },
    {
      id: 1,
      title: 'Python Dictionaries',
      description: 'This is an article that I published on Hashnode. This is a comprehensive guide to dictionaries in Python, that covers all the important concepts of Python Dictionaries.',
      image: '/assets/Dictionary.jpg',
      blogUrl: 'https://olaitanferanmi.hashnode.dev/python-dictionaries'
    },
    {
      id: 2,
      title: 'Cost Optimization In Software Engineering',
      description: 'This is an article that I published on Medium. It explores the concept of IT Cost optimization and how to implement it in a bid to maximize profit.',
      image: '/assets/optimization.jpg',
      blogUrl: 'https://medium.com/@olaitanferanmi41/cost-optimization-in-software-engineering-584b3e3f8ad'
    },
    {
      id: 3,
      title: 'The Unspoken Addiction',
      description: 'This is an article that I published on Medium. It is an opinion piece, which is about phone addiction and how it\'s negatively impacting people\'s lives.',
      image: '/assets/addiction.jpg',
      blogUrl: 'https://medium.com/@olaitanferanmi41/the-unspoken-addiction-b74c87385843'
    },
    {
      id: 4,
      title: 'What is Cybersecurity?',
      description: 'This is an article that I published on Medium. It is an introductory article to the field of cybersecurity, which will enlighten you about the importance of cybersecurity in the tech ecosystem.',
      image: '/assets/cybersecurity.jpg',
      blogUrl: 'https://medium.com/@olaitanferanmi41/what-is-cybersecurity-d1bfc9750240'
    }
  ]

  return (
    <section 
      id="blogs" 
      className="section black-bg" 
      data-aos="flip-up" 
      data-aos-once="true"
    >
      <div className="container">
        <div className="section-title">
          <h2>My <span>Blogs</span></h2>
        </div>
        <div className="grid grid-3">
          {blogs.map((blog, index) => (
            <a key={blog.id} 
              href={blog.blogUrl}
              className="card article-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}>
            <div>
              <div className="card-image">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{blog.title}</h3>
                <p className="card-text">{blog.description}</p>
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs