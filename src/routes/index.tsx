import { useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { MainLayout } from '../components';
import { Profile } from '../pages/Profile/Profile';
import { Registration } from '../pages/Auth/Registration/Registration';

export const AppRoutes = () => {
  // TODO Временно , пока нет авторизации + сделать экран лоадинга
  const isAuth = false;

  const commonRoutes = isAuth
    ? [{ path: '/', element: <Profile /> }]
    : [
        {
          path: '/registration/',
          element: <Registration />,
        },
      ];
  const routes = isAuth ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return <MainLayout>{element}</MainLayout>;
};
