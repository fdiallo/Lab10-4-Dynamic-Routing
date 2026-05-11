import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Define the layout of the blog
 * including the navigation/link to the different pages
 */
export const Layout = () => {
  const { user, logout } = useAuth();
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', gap: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        {user ? (
          <button onClick={logout}>Logout ({user})</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
      <main style={{ marginTop: '20px' }}>
        <Outlet /> 
      </main>
    </div>
  );
};
