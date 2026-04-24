import { Button } from '@/components/ui/button'
import React from 'react'
import HeroSection from './pages/HeroSection'
import AboutSection from './pages/AboutSection'
import ServicesPage from './pages/ServicesPage'
import StatisticsPage from './pages/StatisticsPage'
import ClientReviewsSection from './pages/ClientReviewsSection'
import InnovationPage from './pages/InnovationPage'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <ServicesPage/>
      <StatisticsPage/>
      <ClientReviewsSection/>
      <InnovationPage/>
    </div>
  )
}

export default page