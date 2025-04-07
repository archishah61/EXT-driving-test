import React from 'react'
import Hero from '../../component/HomeComponents/Hero'
import TestTabs from '../../component/HomeComponents/TestTabs'
import HowItWorks from '../../component/HomeComponents/HowItWorks'
import QuestionDesigned from '../../component/HomeComponents/QuestionDesigned'
import PerfectCompanion from '../../component/HomeComponents/PerfectCompanion'
import ScrollToTopProgress from '../../component/HomeComponents/ScrollTopProgress'
import HeroSection from '../../component/HomeComponents/HeroSection'
export default function Home() {
  return (
    <>
      <HeroSection /> 
      {/* <Hero /> */}
      <TestTabs />
      <HowItWorks />
      <QuestionDesigned />
      <PerfectCompanion />
      <ScrollToTopProgress />
    </>
  )
}
