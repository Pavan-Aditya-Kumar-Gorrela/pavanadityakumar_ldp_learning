import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import Dashboard from './components/pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const Index=()=> {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default Index;