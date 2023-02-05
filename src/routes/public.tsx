import { Navigate } from 'react-router-dom';

export const publicRoutes = [
  {
    path: '/registration',
    element: 'reg',
  },
  {
    path: '/auth',
    element: 'login',
  },
  { path: '*', element: <Navigate to="." /> },
];
