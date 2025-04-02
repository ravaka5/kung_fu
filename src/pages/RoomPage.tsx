import Page2 from '../components/RoomsPage/Page2'
import Hero from '../components/RoomsPage/Hero'
import Page1 from '../components/RoomsPage/Page1'
import Page3 from '../components/RoomsPage/Page3'
import Page4 from '../components/RoomsPage/Page4'

const RoomPage = () => {
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

export default RoomPage
