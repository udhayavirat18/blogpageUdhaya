import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Map, User2, Plus } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
export function Navbar() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const logoutUser = () => {
    logout();
    navigate('/');
  }
 
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Map className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl">TravelBlog</span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/itinerary" className="text-gray-700 hover:text-blue-600">
              Itinerary
            </Link>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-600"
            >
              <Instagram className="h-5 w-5" />
            </a>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                  {user.role === 'admin' ? 'Admin' : 'User'}
                </span>
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                  >
                    <Plus className="h-5 w-5" />
                    <span>Add Post</span>
                  </Link>
                )}
                <button
                  onClick={logoutUser}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
              >
                <User2 className="h-5 w-5" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}