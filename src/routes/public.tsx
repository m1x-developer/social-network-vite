import { Navigate } from 'react-router-dom';
import { Registration } from '../Features/Auth/Registration';
import Login from '../Features/Auth/Login';

export const publicRoutes = [
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/auth',
    element: <Login />,
  },
  { path: '*', element: <Navigate to="." /> },
];
