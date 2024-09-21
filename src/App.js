import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserForm from './components/UserForm';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Social Media Task</h1>
          <nav className="mb-8">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
              </li>
              <li>
                <Link to="/admin" className="text-blue-600 hover:text-blue-800">Admin Dashboard</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<UserForm apiUrl={apiUrl} />} />
            <Route path="/admin" element={<AdminDashboard apiUrl={apiUrl} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;