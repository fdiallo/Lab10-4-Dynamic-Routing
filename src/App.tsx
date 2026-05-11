// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { PostList } from './pages/Posts';
import { Login } from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import { PostDetail } from './pages/PostDetail';

const Home = () => <h1>Welcome to the Demo Home Page</h1>;

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            
            {/* Dynamic Routing Group */}
            <Route path="posts">
              <Route index element={<PostList />} />
              
            </Route>
            
            <Route path="*" element={<h1>404 - Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

