import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Teachers from './pages/Teachers.jsx';
import Students from './pages/Students.jsx';
import Dashboard from './pages/Dashboard.jsx';

const Navbar = () => (
  <nav style={{ padding: '15px', background: '#333', color: 'white', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
    <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
    <Link to="/teachers" style={{ color: 'white', textDecoration: 'none' }}>Teachers</Link>
    <Link to="/students" style={{ color: 'white', textDecoration: 'none' }}>Students</Link>
    <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
  </nav>
);

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '10px' }}>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

