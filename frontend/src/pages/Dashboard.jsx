
import React, { useState, useEffect } from 'react'
import FurnitureCard from '../components/FurnitureCard'
import SearchFurniture from '../components/SearchFurniture'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const [Name, SetName] = useState("");

    useEffect(() => {
        console.log("Search name changed:", Name)
    }, [Name]);

    return (
        <div className="p-5 flex-1">

            <h1 className="text-2xl font-bold mb-5">
                Furniture Dashboard
            </h1>

            <Link to="/add-furniture">
                <Button className="mb-4">
                    Add Furniture
                </Button>
            </Link>

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
    )
}

export default Dashboard
