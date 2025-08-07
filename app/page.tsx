'use client'

import React from 'react'
import { Navigation } from '../components/navigation'
import { HeroSection } from '../components/sections/hero-section'
import { AboutSection } from '../components/sections/about-section'
import { SkillsSection } from '../components/sections/skills-section'
import { ProjectsSection } from '../components/sections/projects-section'
import { ReviewsSection } from '../components/sections/reviews-section'
import { ActivitySection } from '../components/sections/activity-section'
import { BlogSection } from '../components/sections/blog-section'
import { ContactSection } from '../components/sections/contact-section'
import { Footer } from '../components/sections/footer'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ReviewsSection />
      <ActivitySection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  )
}