import About from '@/components/About'
import Clinics from '@/components/Clinics'
import Contact from '@/components/Contact'
import Educational from '@/components/Educational'
import Footer from '@/components/Footer'
import Homepage from '@/components/HomePage'
import Navbar from '@/components/Navbar'

import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Clinics/>
      <Educational/>
      <About/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default Home