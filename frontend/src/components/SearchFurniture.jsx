
import React from 'react'

const SearchFurniture = (props) => {

    return (
        <div className="p-5">
            <h2 className="text-xl font-bold mb-3">
                Search Furniture
            </h2>

            <input
                type="text"
                value={props.Name}
                onChange={(t) => { props.SetName(t.target.value) }}
                placeholder="Enter furniture name"
                className="border p-2 rounded w-full"
            />

            <p className="mt-3">
                Searching for: {props.Name}
            </p>
        </div>
    )
}

export default SearchFurniture
