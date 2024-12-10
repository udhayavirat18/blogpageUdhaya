import React from 'react';
import { Link } from 'react-router-dom';
import { useBlogStore } from '../store/blogStore';

export function Itinerary() {
  const { countries, posts } = useBlogStore();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Travel Itineraries
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <div
              key={country}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {country}
                </h2>
                <div className="space-y-2">
                  {posts
                    .filter((post) => post.country === country)
                    .map((post) => (
                      <Link
                        key={post.id}
                        to={`/post/${post.id}`}
                        className="block text-blue-600 hover:text-blue-800"
                      >
                        {post.title}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}