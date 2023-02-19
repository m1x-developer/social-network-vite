import { useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { MainLayout } from '../components';
import { useAuth } from '../providers/AuthContext';
import { Login } from '../pages/Auth/Login/Login';
import { Registration } from '../pages/Auth/Registration/Registration';

export const AppRoutes = () => {
  const { user } = useAuth();
  // TODO Временно , пока нет авторизации + сделать экран лоадинга
  const isAuth = !!user;

  const commonRoutes = [
    { path: '/auth', element: <Login /> },
    { path: '/registration/', element: <Registration /> },
  ];
  const routes = isAuth ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return <MainLayout>{element}</MainLayout>;
};
