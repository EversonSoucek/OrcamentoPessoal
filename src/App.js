import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/LoginPage/LoginPage';
import Home from './Pages/Home/HomePage';
import SobrePage from './Pages/SobrePage/SobrePage';
import DashboardPage from './Pages/Dashboard/DashboardPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
