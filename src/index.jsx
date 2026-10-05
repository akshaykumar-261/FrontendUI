import React from 'react'
import NabBar from './Component/NabBar'
import MainSection from './pages/MainSection'
import Section2 from './pages/Section2'
import Section3 from './pages/Section3'
import PolygonLead from './pages/PolygonLead'
function index() {
  return (
    <div>
      <NabBar />
      <MainSection />
      <Section2 />
      <Section3 />
      <PolygonLead/>
    </div>
  )
}

export default index
