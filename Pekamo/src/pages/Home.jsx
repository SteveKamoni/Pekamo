import React from 'react'
import Hero from '../components/Hero'
import InfoTabs from '../components/InfoTabs'
import ProductSection from '../components/ProductSection'
import SolutionsSection from '../components/SolutionsSection'
import WhyUsSection from '../components/WhyUsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CTASection from '../components/CTASection' 
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'



const Home = () => {
  return (
    <div>
        <Hero/>
        <InfoTabs/>
        <ProductSection/>
        <SolutionsSection/>
        <WhyUsSection/>
        <TestimonialsSection/>
        <CTASection/>
        <ContactSection/>
        <FooterSection/>
    </div>
  )
}

export default Home