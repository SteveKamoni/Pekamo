import React from 'react'
import Hero from '../components/Hero'
import InfoTabs from '../components/InfoTabs'
import ProductSection from '../components/ProductSection'
import SolutionsSection from '../components/SolutionsSection'
import WhyUsSection from '../components/WhyUsSection'
import TestimonialsSection from '../components/TestimonialsSection'


const Home = () => {
  return (
    <div>
        <Hero/>
        <InfoTabs/>
        <ProductSection/>
        <SolutionsSection/>
        <WhyUsSection/>
        <TestimonialsSection/>
    </div>
  )
}

export default Home