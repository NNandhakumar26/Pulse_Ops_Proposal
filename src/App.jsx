import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import EmployeePortal from './pages/EmployeePortal';
import MobileApp from './pages/MobileApp';
import CompleteReport from './pages/CompleteReport';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee-portal"
          element={
            <ProtectedRoute>
              <EmployeePortal />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mobile-app"
          element={
            <ProtectedRoute>
              <MobileApp />
            </ProtectedRoute>
          }
        />

        <Route
          path="/complete-report"
          element={
            <ProtectedRoute>
              <CompleteReport />
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
