import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }}>
            <div className="max-w-4xl w-full text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
                    You got the travel plans, we got the travel vans.
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                    Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                </p>
                <Link 
                    to="vans" 
                    className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Find your van
                </Link>
            </div>
            <div className="mt-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
                <Link 
                    to="vans" 
                    className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Explore Our Vans
                </Link>
            </div>
            <div className="mt-16">
                <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Flexible Rentals</h3>
                        <p className="text-gray-700">Rent for a day, a week, or longer.</p>
                    </div>
                    {/* Add more features */}
                </div>
            </div>
        </div>
    )
}