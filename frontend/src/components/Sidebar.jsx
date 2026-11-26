
import React from 'react'

function Sidebar(){
    return (
        <div className="bg-gray-100 w-64 min-h-screen p-5">
            <h2 className="text-xl font-bold mb-6">Menu</h2>

            <ul className="space-y-4">
                <li>Dashboard</li>
                <li>Furniture Listings</li>
                <li>Add Furniture</li>
                <li>Search Furniture</li>
                <li>Seller Enquiries</li>
            </ul>
        </div>
    )
}

export default Sidebar
