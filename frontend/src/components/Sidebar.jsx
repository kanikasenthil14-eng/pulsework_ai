
import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <div className="bg-gray-100 w-64 min-h-screen p-5">

            <h2 className="text-xl font-bold mb-6">
                Menu
            </h2>

            <ul className="space-y-4">

                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-blue-600 font-bold" : "text-gray-700"
                        }
                    >
                        Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/listings"
                        className={({ isActive }) =>
                            isActive ? "text-blue-600 font-bold" : "text-gray-700"
                        }
                    >
                        Furniture Listings
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/add-furniture"
                        className={({ isActive }) =>
                            isActive ? "text-blue-600 font-bold" : "text-gray-700"
                        }
                    >
                        Add Furniture
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/search"
                        className={({ isActive }) =>
                            isActive ? "text-blue-600 font-bold" : "text-gray-700"
                        }
                    >
                        Search Furniture
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/enquiries"
                        className={({ isActive }) =>
                            isActive ? "text-blue-600 font-bold" : "text-gray-700"
                        }
                    >
                        Seller Enquiries
                    </NavLink>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar

