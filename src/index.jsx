import NabBar from './Component/NabBar'
import MainSection from './pages/MainSection'
import Section2 from './pages/Section2'
import Section3 from './pages/Section3'
import PolygonLead from './pages/PolygonLead'
import Properties from './pages/Properties'
import FlibPricing from './pages/FlibPricing'
import Investor from './pages/Investor'
import FlibbdCommunity from './pages/FlibbdCommunity'
import Grow from './pages/Grow'
import Leades from './pages/Leades'
import Footer from './pages/Footer'
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
      <Investor />
      <FlibbdCommunity />
      <Grow />
      <Leades />
      <Footer/>
    </div>
  )
}

export default index
