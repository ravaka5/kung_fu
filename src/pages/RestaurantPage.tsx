import React from 'react'
import Hero from '../components/RestaurantPage/Hero'
import Page1 from '../components/RestaurantPage/Page1'
import Page2 from '../components/RestaurantPage/Page2'

const RestaurantPage = () => {
  return (
    <div className='scroll-smooth'>
      <Hero/>
      <Page1/>
      <Page2/>
    </div>
  )
}

export default RestaurantPage
