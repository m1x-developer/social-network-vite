import { useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { MainLayout } from '../Components';
import { Profile } from '../Features/Profile/Profile';

export const AppRoutes = () => {
  // TODO Временно , пока нет авторизации + сделать экран лоадинга
  const isAuth = true;

  const commonRoutes = [{ path: '/', element: <Profile /> }];
  const routes = isAuth ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);
  return <MainLayout>{element}</MainLayout>;
};
