import Hero from '../components/EventsPage/Hero'
import Page1 from '../components/EventsPage/Page1'
import Page2 from '../components/EventsPage/Page2'
import Page3 from '../components/EventsPage/Page3'
import Page4 from "../components/EventsPage/Page4"
const EventsPage = () => {
  return (
    <div className='scroll-smooth'>
      <Hero/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
    </div>
  )
}

export default EventsPage
