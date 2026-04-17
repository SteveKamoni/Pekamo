import React, { Suspense, lazy } from 'react'
import Hero from '../components/Hero'
import InfoTabs from '../components/InfoTabs'
import ProductSection from '../components/ProductSection'
import SolutionsSection from '../components/SolutionsSection'
import WhyUsSection from '../components/WhyUsSection'
import CTASection from '../components/CTASection' 
import LoadingSpinner from '../components/LoadingSpinner'

// Lazy load below-the-fold components for better initial performance
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'))
const ContactSection = lazy(() => import('../components/ContactSection'))

const Home = () => {
  return (
    <div>
        <Hero id="hero" />
        <InfoTabs id="info" />
        <ProductSection id="products" />
        <SolutionsSection id="solutions" />
        <WhyUsSection id="whyus" />
        <CTASection id="cta" />
        
        {/* Below-the-fold sections are lazy loaded */}
        <Suspense fallback={<LoadingSpinner />}>
          <TestimonialsSection id="testimonials" />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <ContactSection id="contact" />
        </Suspense>
    </div>
  )
}

export default Home