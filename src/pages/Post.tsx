import React from 'react';
import type { Post } from '../types/index';
import { useParams, Link } from 'react-router-dom';
import { useBlogStore } from '../store/blogStore';
import { ArrowLeft } from 'lucide-react';  // Import the generic ArrowLeft icon

export function Post() {
  const { id } = useParams<{ id: string }>(); // Extract `id` as string from URL
  const { posts } = useBlogStore();

  // Ensure the comparison is between two strings
  const post = posts.find((post) => post.id === id); // Direct comparison since both are strings

  if (!post) {
    return <div className="text-center text-gray-500">Post not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/itinerary" className="text-gray-700 flex items-center mb-4">
          <ArrowLeft className="mr-2" />  {/* Use ArrowLeft or any other icon */}
          Back to Itinerary
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
        <p className="text-gray-700">{post.content}</p>
      </div>
    </div>
  );
}
