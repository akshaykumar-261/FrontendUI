import React from 'react'
import NabBar from './Component/NabBar'
import MainSection from './pages/MainSection'
import Section2 from './pages/Section2'
import Section3 from './pages/Section3'
import PolygonLead from './pages/PolygonLead'
import Properties from './pages/Properties'
import FlibPricing from './pages/FlibPricing'
import Investor from './pages/Investor'
function index() {
  return (
    <div>
      <NabBar />
      <MainSection />
      <Section2 />
      <Section3 />
      <PolygonLead />
      <Properties />
      <FlibPricing />
      <Investor/>
    </div>
  )
}

export default index
