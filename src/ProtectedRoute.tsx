import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import type { JSX } from 'react';


export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};