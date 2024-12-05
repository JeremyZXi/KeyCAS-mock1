import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { GraduationCap, PenTool, Activity, Heart } from 'lucide-react';

export function Navbar() {
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">Keystone CAS</span>
            </Link>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 text-gray-900">
                Gallery
              </Link>
              <Link to="/projects" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
                <PenTool className="h-4 w-4 mr-1" />
                Projects
              </Link>
              <Link to="/activities" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
                <Activity className="h-4 w-4 mr-1" />
                Activities
              </Link>
              <Link to="/service" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
                <Heart className="h-4 w-4 mr-1" />
                Service
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">{user?.name}</span>
                {user?.role === 'admin' && (
                  <Link to="/admin" className="text-blue-600 hover:text-blue-800">
                    Admin
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}