import { Navigate, Outlet } from 'react-router-dom';
// import useAuth from './useAuth';

// import Index from './Index';

export default function ProtectedRoute() {
  const user = localStorage.getItem("user"); // Or from a context

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;   // renders protected child routes
}








