// pages/Login.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


export const Login = () => {
  const [name, setName] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name) {
      login(name);
      navigate('/'); // Redirect home after login
    }
  };


  return (
    <div>
      <h2>Login</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
};
