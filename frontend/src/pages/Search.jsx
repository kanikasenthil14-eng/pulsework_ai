
import React, { useState } from 'react'
import SearchFurniture from '../components/SearchFurniture'

const Search = () => {

    const [Name, SetName] = useState("")

    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">
                Search Furniture
            </h1>

            <SearchFurniture
                Name={Name}
                SetName={SetName}
            />
        </div>
    )
}

export default Search
