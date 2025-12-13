import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status (e.g., check token or session)
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  return isAuthenticated;
};

export default useAuth;