'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert('Message sent successfully!')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { href: 'https://twitter.com/olaitan_feranmi', icon: 'fa-brands fa-x-twitter' },
    { href: 'https://github.com/oofeyang22', icon: 'fa-brands fa-github' },
    { href: 'https://www.linkedin.com/in/emmanuel-feranmi-6a6a00279/', icon: 'fa-brands fa-linkedin' },
    { href: 'https://www.behance.net/olaitanferanmi1', icon: 'fa-brands fa-square-behance' }
  ]

  return (
    <section 
      id="contact" 
      className="section gradient-bg" 
      data-aos="flip-down" 
      data-aos-once="true"
    >
      <div className="container">
        <div className="section-title">
          <h2>Contact <span>Me</span></h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>If you want to reach me, you can do that through the different channels listed below</h3>
            <div className="contact-details">
              <p>Location: Nigeria</p>
              <p>Email: olaitanferanmi41@gmail.com</p>
              <p>Mobile number: +2349064813638</p>
            </div>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Visit ${social.href}`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  placeholder="Enter a message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact