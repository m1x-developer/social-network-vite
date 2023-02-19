import { RootProvider } from './providers/providers';
import { AppRoutes } from './routes';

/* testing push in GIT */

export const WrappedApp = () => {
  return (
    <RootProvider>
      <AppRoutes />
    </RootProvider>
  );
};
