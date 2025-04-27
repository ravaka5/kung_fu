import './App.css'
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import RestaurantPage from './pages/RestaurantPage'
import RoomPage from './pages/RoomPage'
import EventsPage from './pages/EventsPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/restaurant' element={<RestaurantPage />} />
        <Route path='/room' element={<RoomPage />} />
        <Route path='/events' element={<EventsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
