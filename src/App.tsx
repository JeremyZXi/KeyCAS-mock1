import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from './config/auth';
import { Navbar } from './components/Layout/Navbar';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { useAuthStore } from './store/authStore';

function AuthenticatedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore();
  
  if (!isAuthenticated) {
    return <LoginPage />;
  }
  
  return <>{children}</>;
}

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route 
                path="/project/:id" 
                element={
                  <AuthenticatedRoute>
                    <ProjectDetailPage />
                  </AuthenticatedRoute>
                } 
              />
            </Routes>
          </main>
        </div>
      </Router>
    </MsalProvider>
  );
}

export default App;