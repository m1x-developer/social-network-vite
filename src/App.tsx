import { Route, Routes } from 'react-router-dom';
import { RootProvider } from './providers/providers';
import { MainLayout } from './Components';
import { AppRoutes } from './routes';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="*" element="12222" />
    </Routes>
  );
};

export const WrappedApp = () => {
  return (
    <RootProvider>
      <AppRoutes />
    </RootProvider>
  );
};
