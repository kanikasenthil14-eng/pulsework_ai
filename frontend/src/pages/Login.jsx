
import React from 'react'

const Login = () => {
    return (
        <div className="p-5 max-w-md">

            <h1 className="text-2xl font-bold mb-5">
                Login
            </h1>

            <form>

                <div className="mb-4">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="border p-2 w-full rounded"
                    />
                </div>

                <div className="mb-4">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="border p-2 w-full rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-5 py-2 rounded"
                >
                    Login
                </button>

            </form>

        </div>
    )
}

export default Login
