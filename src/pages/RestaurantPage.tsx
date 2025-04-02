import Hero from '../components/RestaurantPage/Hero'
import Page1 from '../components/RestaurantPage/Page1'
import Page2 from '../components/RestaurantPage/Page2'
import Page3 from '../components/RestaurantPage/Page3'
import Page4 from '../components/RestaurantPage/Page4'
import Page5 from '../components/RestaurantPage/Page5'

const RestaurantPage = () => {
  return (
    <div className='scroll-smooth'>
      <Hero/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
    </div>
  )
}

export default RestaurantPage
