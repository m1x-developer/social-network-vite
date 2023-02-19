import { AppShell, LoadingOverlay, useMantineTheme } from '@mantine/core';
import React from 'react';
import { NavigationBar } from './NavBar/NavBar';
import { HeaderMegaMenu } from './Header/Header';
import { FooterSocial } from './Footer/Footer';
import { useAuth } from '../../providers/AuthContext';

export const MainLayout = ({ children }: any) => {
  const theme = useMantineTheme();

  const { user, isLoading } = useAuth();
  const isAuth = !!user;

  if (isLoading) {
    return <LoadingOverlay visible />;
  }

  if (!isAuth) {
    return children;
  }

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<NavigationBar />}
      footer={<FooterSocial />}
      header={<HeaderMegaMenu />}
    >
      {children}
    </AppShell>
  );
};
