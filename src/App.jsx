import './App.css'
import Header from './components/header.jsx'
import HeroSection from './components/herosection.jsx' 
import PropertyGrid from './components/propertygrid.jsx'
import Guide from './components/guide.jsx'
import Comstats from './components/comstats.jsx'
import Agents from './components/agents.jsx'
import Footer from './components/footer.jsx'


function App() {
  return(
    <div className='body'>
      <Header/>
      <HeroSection/>
      <Comstats/>
      <PropertyGrid/>
      <Guide/>
      <Agents/>
      <Footer/>
    </div>
  )
}

export default App
