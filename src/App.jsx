import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { portfolioData } from './data/portfolioData'

const App = () => {
  return (
    <>
      <div id="top"></div>
      <Hero data={portfolioData.hero} />
      <About data={portfolioData.about} />
      <Projects projects={portfolioData.projects} />
      <Contact data={portfolioData.contact} />
      <Footer social={portfolioData.social} />
    </>
  )
}

export default App