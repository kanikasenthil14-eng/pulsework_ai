
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import furnitureSchema from '../lib/furnitureSchema'

const FurnitureForm = () => {

    const [success, setSuccess] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(furnitureSchema)
    })

    const onSubmit = (data) => {
        console.log(data)
        setSuccess(true)
        reset()
    }

    return (
        <div className="p-5 max-w-xl mx-auto">

            <h2 className="text-2xl font-bold mb-5">
                Add Furniture
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-4">
                    <label>Furniture Name</label>
                    <input
                        {...register("Name")}
                        type="text"
                        placeholder="Enter furniture name"
                        className="border p-2 w-full rounded"
                    />
                    <p className="text-red-500">{errors.Name?.message}</p>
                </div>

                <div className="mb-4">
                    <label>Condition</label>
                    <select
                        {...register("condition")}
                        className="border p-2 w-full rounded"
                    >
                        <option value="">Select condition</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                    <p className="text-red-500">{errors.condition?.message}</p>
                </div>

                <div className="mb-4">
                    <label>Material</label>
                    <input
                        {...register("material")}
                        type="text"
                        placeholder="Enter material"
                        className="border p-2 w-full rounded"
                    />
                    <p className="text-red-500">{errors.material?.message}</p>
                </div>

                <div className="mb-4">
                    <label>Price</label>
                    <input
                        {...register("price")}
                        type="number"
                        placeholder="Enter price"
                        className="border p-2 w-full rounded"
                    />
                    <p className="text-red-500">{errors.price?.message}</p>
                </div>

                <div className="mb-4">
                    <label>Dimensions</label>
                    <input
                        {...register("dimensions")}
                        type="text"
                        placeholder="Example: 120 x 60 x 75 cm"
                        className="border p-2 w-full rounded"
                    />
                    <p className="text-red-500">{errors.dimensions?.message}</p>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-5 py-2 rounded"
                >
                    Submit
                </button>

                {success && (
                    <p className="text-green-600 font-bold mt-4">
                        Furniture added successfully!
                    </p>
                )}

            </form>
        </div>
    )
}

export default FurnitureForm
