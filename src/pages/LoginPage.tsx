import React from 'react';
import { useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { loginRequest } from '../config/auth';
import { GraduationCap } from 'lucide-react';

export function LoginPage() {
  const { instance } = useMsal();
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await instance.loginPopup(loginRequest);
      if (response?.account) {
        setUser({
          id: response.account.localAccountId,
          name: response.account.name || '',
          email: response.account.username || '',
          role: 'student',
        });
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Failed to sign in. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900">Welcome to Keystone CAS</h2>
          <p className="mt-2 text-gray-600">Sign in with your Microsoft account to continue</p>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
        
        <button
          onClick={handleLogin}
          disabled={isLoading}
          className={`w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <span className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z"/>
            </svg>
          )}
          {isLoading ? 'Signing in...' : 'Sign in with Microsoft'}
        </button>
      </div>
    </div>
  );
}