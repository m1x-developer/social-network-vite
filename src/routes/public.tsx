import { Navigate } from 'react-router-dom';
import { Login } from '../pages/Auth/Login/Login';
import { Registration } from '../pages/Auth/Registration/Registration';

export const publicRoutes = [
  {
    path: '/registration/',
    element: <Registration />,
  },
  {
    path: '/auth',
    element: <Login />,
  },
  { path: '*', element: <Navigate to="/auth" /> },
];
