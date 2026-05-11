import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { JSX } from 'react';

/**
 * ProtectedRoute component checks if a user is logged in before showing a page; 
 * otherwise, it redirects them to the login page.
 */
export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};