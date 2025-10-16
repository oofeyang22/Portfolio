'use client'

import { useState, useEffect } from 'react'
//import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const navLinks = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About Me' },
    { href: 'skills', label: 'Skills' },
    { href: 'projects', label: 'Projects' },
    { href: 'blogs', label: 'Blogs' },
    { href: 'contact', label: 'Contact Me' }
  ]

  return (
    <nav id="nav" className={isFixed ? 'fixed-nav' : ''}>
      <div className="container">
        <div className="nav-container">
          <div className="nav-brand">Yangy</div>
          <button 
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
          <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
            {navLinks.map((link) => (
              <div
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="nav-link"
              >
                {link.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation