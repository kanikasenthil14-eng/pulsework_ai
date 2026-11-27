
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import FurnitureCard from './components/FurnitureCard'
import Footer from './components/Footer'
import SearchFurniture from './components/SearchFurniture'
import { Button } from './components/ui/button'

const App = () => {

  const [Name, SetName] = useState("");

  useEffect(() => {
    console.log("Search name changed:", Name)
  }, [Name]);

  return (
    <div>
      <Navbar />

      <div className="flex flex-col md:flex-row">
        <Sidebar />

        <div className="p-5 flex-1">

          <h1 className="text-2xl font-bold mb-5">
            Furniture Dashboard
          </h1>

          <Button className="mb-4">
            Add Furniture
          </Button>

          <SearchFurniture Name={Name} SetName={SetName} />

          <div className="flex flex-wrap">

            {(Name === "" || "Wooden Chair".toLowerCase().includes(Name.toLowerCase())) &&
              <FurnitureCard
                Name="Wooden Chair"
                condition="Good"
                material="Wood"
                price="1500"
              />
            }

            {(Name === "" || "Dining Table".toLowerCase().includes(Name.toLowerCase())) &&
              <FurnitureCard
                Name="Dining Table"
                condition="Excellent"
                material="Solid Wood"
                price="5000"
              />
            }

            {(Name === "" || "Sofa Set".toLowerCase().includes(Name.toLowerCase())) &&
              <FurnitureCard
                Name="Sofa Set"
                condition="Good"
                material="Fabric"
                price="8000"
              />
            }

          </div>

          {!["Wooden Chair", "Dining Table", "Sofa Set"].some(
            item => item.toLowerCase().includes(Name.toLowerCase())
          ) && (
            <p className="text-red-500 font-bold p-4">
              No furniture found!
            </p>
          )}

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
