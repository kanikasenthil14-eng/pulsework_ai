
import React from 'react'

function FurnitureCard(props) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4 w-64">

            <h2 className="text-xl font-bold">
                {props.Name}
            </h2>

            <p className="text-gray-600">
                Condition: {props.condition}
            </p>

            <p className="text-gray-600">
                Material: {props.material}
            </p>

            <p className="text-gray-600">
                Price: ₹{props.price}
            </p>

            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-3">
                View Details
            </button>

        </div>
    )
}

export default FurnitureCard
