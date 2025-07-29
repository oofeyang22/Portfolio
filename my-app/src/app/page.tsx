'use client'

import { useEffect, useState } from 'react'
//import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Blogs from '@/components/Blogs'
import Contact from '@/components/Contact'
import BackToTop from '@/components/BackToTop'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    })
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
      <BackToTop />
    </>
  )
}