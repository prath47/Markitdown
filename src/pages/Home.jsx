import React from 'react'
import Navbar from '../Components/Navbar'
import HomeNavSection from '../Components/HomeNavSection'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='m-2 rounded-md overflow-hidden'>
        <HomeNavSection />

        <div className='px-32 py-4'>
          <img
            className='w-full h-full object-cover rounded-md shadow-lg'
            src="/preview.png" alt="img" />
        </div>
      </div>
      <p className='w-full border-black border-2 flex items-center justify-center text-white bg-slate-900'>It's an opensource project contributors are welcome</p>
      <Footer />
    </div>
  )
}

export default Home