
import React from 'react'

const FurnitureCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
        <h2 className="text-xl font-bold">Wooden Chair</h2>
        <p className="text-gray-600">Condition: Good</p>
        <p className="text-gray-600">Material: Wood</p>
        <p className="text-gray-600">Price: ₹1,500</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-3">
            View Details
        </button>
    </div>
  )
}

export default FurnitureCard
