import { RootProvider } from './providers/providers';
import { AppRoutes } from './routes';

export const WrappedApp = () => {
  return (
    <RootProvider>
      <AppRoutes />
    </RootProvider>
  );
};
