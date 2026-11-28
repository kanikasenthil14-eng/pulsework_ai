
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import Dashboard from './pages/Dashboard'
import Listings from './pages/Listings'
import AddFurniture from './pages/AddFurniture'
import Login from './pages/Login'
import Search from './pages/Search'
import Enquiries from './pages/Enquiries'

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <div className="flex flex-col md:flex-row">

                <Sidebar />

                <div className="flex-1 p-5">

                    <Routes>

                        <Route path="/" element={<Dashboard />} />

                        <Route path="/listings" element={<Listings />} />

                        <Route path="/add-furniture" element={<AddFurniture />} />

                        <Route path="/login" element={<Login />} />

                        <Route path="/search" element={<Search />} />

                        <Route path="/enquiries" element={<Enquiries />} />

                    </Routes>

                </div>

            </div>

            <Footer />

        </BrowserRouter>
    )
}

export default App
