import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocationProvider } from './contexts/LocationContext';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/navigation/header';
import { HomePage } from './pages/home';
import { DiscoverPage } from './pages/discover';
import { MarketplacePage } from './pages/marketplace';
import { CommunityPage } from './pages/community';
import { LearnPage } from './pages/learn';

function App() {
  return (
    <AuthProvider>
      <LocationProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/discover" element={<DiscoverPage />} />
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/learn" element={<LearnPage />} />
            </Routes>
          </div>
        </Router>
      </LocationProvider>
    </AuthProvider>
  );
}

export default App;