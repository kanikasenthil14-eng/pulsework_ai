
import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import FurnitureCard from './components/FurnitureCard'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="p-5">
          <h1 className="text-2xl font-bold mb-5">
            Furniture Dashboard
          </h1>

          <div className="flex flex-wrap">
            <FurnitureCard />
            <FurnitureCard />
            <FurnitureCard />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
