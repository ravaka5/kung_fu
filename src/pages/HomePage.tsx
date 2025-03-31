import Hero from '../components/HomePage/Hero'
import Page1 from '../components/HomePage/Page1'
import Page2 from '../components/HomePage/Page2'
import Page3 from '../components/HomePage/Page3'
import Page4 from '../components/HomePage/Page4'
import Page5 from '../components/HomePage/Page5'
import Page6 from '../components/HomePage/Page6'
import Page7 from '../components/HomePage/Page7'
import "./HomePage.css"

const HomePage = () => {
  return (
    <div className='scroll-smooth'>
      <Hero/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
    </div>
  )
}

export default HomePage