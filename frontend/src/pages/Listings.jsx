
import React from 'react'
import FurnitureCard from '../components/FurnitureCard'

const Listings = () => {
    return (
        <div className="p-5">

            <h1 className="text-2xl font-bold mb-5">
                Furniture Listings
            </h1>

            <div className="flex flex-wrap">

                <FurnitureCard
                    Name="Wooden Chair"
                    condition="Good"
                    material="Wood"
                    price="1500"
                />

                <FurnitureCard
                    Name="Dining Table"
                    condition="Excellent"
                    material="Solid Wood"
                    price="5000"
                />

                <FurnitureCard
                    Name="Sofa Set"
                    condition="Good"
                    material="Fabric"
                    price="8000"
                />

            </div>

        </div>
    )
}

export default Listings
