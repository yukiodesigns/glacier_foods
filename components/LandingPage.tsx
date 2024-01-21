import React from 'react'
import Hero from './shared/Hero'
import CTA from './shared/CTA'
import Contact from './shared/Contact'
import Testimonials from './shared/Testimonials'
import AboutUsSection from './shared/About'
import Featured from './shared/Featured'

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AboutUsSection />
      <Featured />
      <CTA />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default LandingPage