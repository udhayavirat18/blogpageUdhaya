import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Map, Plane } from 'lucide-react';

export function Home() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavigation = () => {
    navigate('/itinerary'); // Navigate to the /itinerary route
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Map className="mx-auto h-12 w-12 text-blue-600" />
          <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Welcome to My Travel Blog
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Exploring the world, one story at a time
          </p>
        </div>

        <div className="mt-16">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Travel"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={handleNavigation} // Bind the onClick event
            className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg flex items-center gap-2 group"
          >
            <Plane className="h-5 w-5 transition-transform transform group-hover:rotate-12" />
            Itinerary
          </button>
        </div>
      </div>
    </div>
  );
}
